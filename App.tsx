import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Radio, RadioGroup, Slider } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Header from "./src/components/Header";
import Map from "./src/components/Map";
import Marker from "./src/components/Marker";
import { inHcmAll, outHcmAll, inHcmAllGroup, addSeniorty } from "./src/components/util";
import { buildA, staffs, districtCenter, candidates } from "./src/data";
import * as data from "./src/data";

const marks = [
  {
    value: 0,
    label: "0 year",
  },
  {
    value: 15,
    label: "15 years",
  },
];

const App: React.VFC = () => {
  const [zoom, setZoom] = React.useState(11);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 10.8092805, //IBM Building location
    lng: 106.6660986,
  });

  const [inHcmEmployeeGroup, setInHcmEmployeeGroup] = React.useState(
    inHcmAllGroup(staffs)
  );
  const [inHcmEmployee, setInHcmEmployee] = React.useState(inHcmAll(staffs));
  const [outHcmEmployee, setOutHcmEmployee] = React.useState(outHcmAll(staffs));

  const setFilter = (arr) => {
    const inHcmEmployeeGroup = inHcmAllGroup(arr);
    setInHcmEmployeeGroup(inHcmEmployeeGroup);

    const inHcmEmployee = inHcmAll(arr);
    setInHcmEmployee(inHcmEmployee);

    const outHcmEmployee = outHcmAll(arr);
    setOutHcmEmployee(outHcmEmployee);
  };

  const [employee, setEmployee] = React.useState("staff");
  const [typeMap, setTypeMap] = React.useState("streetMap");

  const [year, setYear] = React.useState([0, 15]);
  const [showOffice, setShowOffice] = React.useState(false);
  const [currentInfoWindow, setCurrentInfoWindow] =
    React.useState<google.maps.InfoWindow>();

  const [department, setDepartment] = React.useState("All");
  const handleChangeDepartment = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
  };

  const [area, setArea] = React.useState("All");
  const handleChangeArea = (event: SelectChangeEvent) => {
    setArea(event.target.value as string);
  };

  const handleOnChangeYear = (e) => {
    setYear(e.target.value as number[]);
  };

  const handleChangeShowOffice = () => {
    setShowOffice(!showOffice);
  };

  const handleChangeMap = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeMap((event.target as HTMLInputElement).value);
  };

  const handleChangeEmployee = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((event.target as HTMLInputElement).value);
  };


  React.useEffect(() => {
    const newStaffs = addSeniorty(staffs);
    let dataFilter = employee === "staff" ? newStaffs : candidates;

    if (
      (department !== "" && department !== "All") ||
      (area !== "" && area !== "All") ||
      year[0] !== 0 ||
      year[1] !== 15
    ) {
      if (department !== "All") {
        dataFilter = dataFilter.filter((ite) => ite.Department === department);
      }

      if (area !== "All") {
        dataFilter = dataFilter.filter((ite) => ite.NewDistrict === area);
      }

      if (year[0] !== 0 || year[1] !== 15) {
        dataFilter = dataFilter.filter((ite) => {
          return (
            +(ite.Seniorty || 0) >= year[0] && +(ite.Seniorty || 0) <= year[1]
          );
        });
      }

      setFilter(dataFilter);
    } else if (
      department === "All" &&
      area === "All" &&
      year[0] === 0 &&
      year[1] === 15
    ) {
      setFilter(dataFilter);
    } else {
      setFilter([]);
    }
  }, [year, department, area, zoom, employee]);

  const handleClickMarker = (infoWindow: google.maps.InfoWindow) => {
    if (currentInfoWindow) {
      currentInfoWindow.close();
    }
    setCurrentInfoWindow(infoWindow);
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="m-12">
        <Header />
        <div className="d-flex align-items-center">
          <div className="mr-24">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="type-map"
                name="type-map"
                value={typeMap}
                onChange={handleChangeMap}
              >
                <FormControlLabel
                  value="streetMap"
                  control={<Radio />}
                  label="Street Map"
                />
                <FormControlLabel
                  value="heatMap"
                  control={<Radio />}
                  label="Heat Map"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="w-240 mr-24">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="type-employee"
                name="type-employee"
                value={employee}
                onChange={handleChangeEmployee}
              >
                <FormControlLabel
                  value="staff"
                  control={<Radio />}
                  label="Staff"
                />
                <FormControlLabel
                  value="candidate"
                  control={<Radio />}
                  label="Candidate"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="d-flex w-240">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    value={showOffice}
                    onChange={handleChangeShowOffice}
                  />
                }
                label="Available Offices"
              />
            </FormGroup>
          </div>

          {typeMap === "streetMap" && (
            <>
              <div className="w-240 mr-24">
                <FormControl fullWidth>
                  <InputLabel id="select-label-department">
                    Department
                  </InputLabel>
                  <Select
                    labelId="select-label-department"
                    id="demo-simple-select"
                    value={department}
                    label="Department"
                    onChange={handleChangeDepartment}
                  >
                    {data.departmentDatas.map((ite, i) => (
                      <MenuItem key={i} value={ite.name}>
                        {ite.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="w-240 mr-48">
                <FormControl fullWidth>
                  <InputLabel id="select-label-area">Area</InputLabel>
                  <Select
                    labelId="select-label-area"
                    id="demo-simple-select"
                    value={area}
                    label="Area"
                    onChange={handleChangeArea}
                  >
                    {data.areaDatas.map((ite, i) => (
                      <MenuItem key={i} value={ite.name}>
                        {ite.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="w-280 d-flex mr-48">
                <FormControl fullWidth>
                  <Slider
                    step={0.5}
                    getAriaLabel={() => "Year range"}
                    defaultValue={1}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    max={15}
                    min={0}
                    marks={marks}
                    value={year}
                    onChange={handleOnChangeYear}
                  />
                </FormControl>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex-grow-1">
          <Map
            center={center}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100%" }}
            areas={area}
            sendToZoom={setZoom}
            typeMaps={typeMap}
            typeEmployees = {employee}
          >
            {/* show main office  */}
            <Marker position={center} type={"main office"} icon={{ url: '../../public/images/main-office.png'}} zIndex={99999} />
            {/* show district label */}
            {zoom >= 11 &&
              districtCenter.map((item) => {
                return (
                  <Marker
                    position={item.position}
                    label={{
                      color: "#333",
                      fontSize: zoom + "px",
                      fontWeight: "500",
                      text: item.labelText,
                    }}
                  />
                );
              })}
            {/* show office  */}
            {showOffice && 
              buildA.map((item, i) => {
                return (
                  <Marker
                    key={i}
                    id={i}
                    position={item.position}
                    type={"sub office"}
                    item={item}
                    onClick={handleClickMarker}
                  />
                );
              })}
            {/* show employee */}
            {typeMap === 'streetMap' && outHcmEmployee.map((item, i) => {
              return (
                <Marker
                  key={"outOfHcmStaffs" + i}
                  position={item.position}
                  item={item}
                  id={i + 10000}
                  type={"out hcm"}
                  onClick={handleClickMarker}
                  typeEmployee={employee}
                  zooms={zoom}
                />
              );
            })}
            ;
            {typeMap === 'streetMap' && zoom < 12 &&
              inHcmEmployeeGroup.map((item, i) => {
                return (
                  <Marker
                    key={"inOfHcmStaffs" + i}
                    position={item.position}
                    id={i + 30000}
                    type={"in hcm"}
                    employees={item.employees}
                    label={{
                      text: Object.keys(item.employees).length.toString(),
                      fontSize: "12px",
                      color: "#fff",
                    }}
                    onClick={handleClickMarker}
                    typeEmployee={employee}
                    zooms={zoom}

                  />
                );
              })}
            ;
            {typeMap === 'streetMap' && zoom >= 12 &&
              inHcmEmployee.map((item, i) => {
                return (
                  <Marker
                    key={"inOfHcmStaffsZoom" + i}
                    position={item.position}
                    item={item}
                    id={i + 10000}
                    type={"in hcm"}
                    onClick={handleClickMarker}
                    typeEmployee={employee}
                    zooms={zoom}
                  />
                );
              })}
          </Map>
      </div>
    </div>
  );
};

export default App;

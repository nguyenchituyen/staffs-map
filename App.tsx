import * as React from "react";
import { Radio, RadioGroup, Slider, FormGroup, FormControlLabel, Switch, MenuItem, InputLabel, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Header from "./src/components/Header";
import Map from "./src/components/Map";
import Marker from "./src/components/Marker";
import {
  inHcmAll,
  outHcmAll,
  inHcmAllGroup,
  addSeniorty,
} from "./src/components/util";
import { buildA, staffs, districtCenter, candidates } from "./src/data";
import * as data from "./src/data";
import { marksSeniorty } from "./src/data/constant";
import classNames from 'classnames';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


const App: React.VFC = () => {
  const [zoom, setZoom] = React.useState(11);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 10.8092805, //IBM Building location
    lng: 106.6660986,
  });

  // const [inHcmEmployeeWard, setInHcmEmployeeWard] = React.useState(
  //   inHcmWard(staffs)
  // );
  const [inHcmEmployeeGroup, setInHcmEmployeeGroup] = React.useState(
    inHcmAllGroup(staffs)
  );
  const [inHcmEmployee, setInHcmEmployee] = React.useState(inHcmAll(staffs));
  const [outHcmEmployee, setOutHcmEmployee] = React.useState(outHcmAll(staffs));
  

  const setFilter = (arr) => {
    // const inHcmEmployeeWard = inHcmWard(arr);
    // setInHcmEmployeeWard(inHcmEmployeeWard);

    const inHcmEmployeeGroup = inHcmAllGroup(arr);
    setInHcmEmployeeGroup(inHcmEmployeeGroup);

    const inHcmEmployee = inHcmAll(arr);
    setInHcmEmployee(inHcmEmployee);

    const outHcmEmployee = outHcmAll(arr);
    setOutHcmEmployee(outHcmEmployee);
  };

  const [employee, setEmployee] = React.useState("staff");
  const newStaffs = addSeniorty(staffs);  
  let dataFilter = employee === "staff" ? newStaffs : candidates;
  
  const [year, setYear] = React.useState([0, 15]);
  const [showOffice, setShowOffice] = React.useState(false);
  const [showHeatMap, setShowHeatMap] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filterList, setFilterList] = React.useState(dataFilter);

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

  const handleChangeShowHeatMap = () => {
    setShowHeatMap(!showHeatMap);
  };

  const handleChangeEmployee = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((event.target as HTMLInputElement).value);
  };

  const handleClickMarker = (infoWindow: google.maps.InfoWindow) => {
    if (currentInfoWindow) {
      currentInfoWindow.close();
    }
    setCurrentInfoWindow(infoWindow);
  };


  const handleShowFilter = () => {
    setShowFilter(!showFilter); 
  }

  React.useEffect(() => {
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
      setFilterList(dataFilter);
    } else if (
      department === "All" &&
      area === "All" &&
      year[0] === 0 &&
      year[1] === 15
    ) {
      setFilter(dataFilter);
      setFilterList(dataFilter);
    } else {
      setFilter([]);
    }
  }, [year, department, area, employee]);

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="left-content">
          <div className="d-flex align-items-center justify-content-between p-16 border-bottom">
            <h5>Listing</h5>
            <Button onClick={handleShowFilter} variant="text">Filter</Button>
          </div> 
          <PerfectScrollbar className="info-content">
            <p className="color-grey-n80 fs-12">{filterList.length} Results</p>
            { filterList.map((item) => (
              <div className="employee">
                <img className="employee-image" src="./images/avatar.png" alt="" />
                <div>
                  <p className="fw-700 mb-4 color-black">{item.NickName}</p>
                  <p className="color-grey-n70 mb-4">{item.Department}</p>
                  <p className="color-grey-n50">{item.FullAddress}</p>
                </div>
              </div>
            ))}
          </PerfectScrollbar>
        </div>
        <div className="right-content">
          <Map
            center={center}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100%" }}
            areas={area}
            sendToZoom={setZoom}
            showHeatMaps={showHeatMap}
            typeEmployees={employee}
          >
            {/* show main office  */}
            <Marker
              position={center}
              type={"main office"}
              icon={{ url: "../../images/main-office.png" }}
              zIndex={99999}
            />
            {/* show district label */}
            {/* {zoom >= 11 &&
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
              })} */}
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
            {!showHeatMap &&
              outHcmEmployee.map((item, i) => {
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
            {!showHeatMap &&
              zoom < 12 &&
              inHcmEmployeeGroup.map((item, i) => {
                return (
                  <Marker
                    key={"inOfHcmGroupStaffs" + i}
                    position={item.position}
                    id={i + 20000}
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
            {/* {!showHeatMap &&
              zoom >= 12 &&
              zoom < 14 &&
              inHcmEmployeeWard.map((item, i) => {
                return (
                  <Marker
                    key={"inOfHcmWardStaffs" + i}
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
              })} */}
            {!showHeatMap &&
              zoom >= 12 &&
              inHcmEmployee.map((item, i) => {
                return (
                  <Marker
                    key={"inOfHcmStaffs" + i}
                    position={item.position}
                    item={item}
                    id={i + 40000}
                    type={"in hcm"}
                    onClick={handleClickMarker}
                    typeEmployee={employee}
                    zooms={zoom}
                  />
                );
              })}
              
          </Map>
        </div>
        { showFilter && <div className="overlay"></div>}
        <div className={classNames("filter-content", showFilter && 'show')}>
          <div className="d-flex align-items-center justify-content-between p-16 border-bottom">
            <h3>Filter</h3>
            <Button onClick={handleShowFilter}>Close</Button>
          </div>
          <div className="p-16">
            <p className="fw-700 mb-16">Staff & Candidate</p>
            <p className="color-grey">Data Type</p>
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
            <FormGroup className="mb-20">
              <FormControlLabel
                control={
                  <Switch
                    value={showHeatMap}
                    onChange={handleChangeShowHeatMap}
                  />
                }
                label="Heat Map"
              />
            </FormGroup>
            {!showHeatMap && (
              <>
                <div className="mb-20">
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
                <div className="mb-20">
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
                {employee === "staff" && (
                  <div className="mx-20">
                    <FormControl fullWidth>
                      <Slider
                        step={0.5}
                        getAriaLabel={() => "Year range"}
                        defaultValue={1}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        max={15}
                        min={0}
                        marks={marksSeniorty}
                        value={year}
                        onChange={handleOnChangeYear}
                      />
                    </FormControl>
                  </div>
                )}
              </>
            )}
            </div>
          </div>
      </div>
    </>
  );
};

export default App;

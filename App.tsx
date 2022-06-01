import * as React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Slider } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import Map from "./components/Map";
import Marker from "./components/Marker";

import { buildA, buildB, staffs } from "./data";
import * as data from "./data";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

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
  const [zoom, setZoom] = React.useState(12);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 10.8092805, //IBM Building location
    lng: 106.6660986,
  });

  const [dataList, setDataList] = React.useState(staffs);
  const [year, setYear] = React.useState([0, 15]);
  const [showOffice, setShowOffice] = React.useState(false);

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

  const handleChangeShowOffice = (e) => {
    setShowOffice(!showOffice);
  };

  React.useEffect(() => {
    let dataFilter = staffs;
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
        dataFilter = dataFilter.filter((ite) => ite.District === area);
      }

      if (year[0] !== 0 || year[1] !== 15) {
        dataFilter = dataFilter.filter((ite) => {
          return (
            +(ite.Seniorty || 0) >= year[0] && +(ite.Seniorty || 0) <= year[1]
          );
        });
      }
      setDataList(dataFilter);
    } else if (
      department === "All" &&
      area === "All" &&
      year[0] === 0 &&
      year[1] === 15
    ) {
      setDataList(staffs);
    } else {
      setDataList([]);
    }
  }, [year, department, area]);

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ margin: "12px" }}>
        <h3
          style={{
            fontSize: "24px",
            lineHeight: "36px",
            letterSpacing: "2.5px",
            fontWeight: "700",
            color: "#18181d",
          }}
        >
          Aperia Staff Map{" "}
        </h3>
        <div style={{ display: "flex" }}>
          <div style={{ width: "280px", marginRight: "24px" }}>
            <FormControl fullWidth>
              <InputLabel id="select-label-department">Department</InputLabel>
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
          <div style={{ width: "280px", marginRight: "38px" }}>
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
          <div
            style={{
              width: "280px",
              display: "flex",
              alignItems: "center",
              marginRight: "60px",
            }}
          >
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
            {/* <Button onClick={handleRender1}>RENDER</Button>
            <Button onClick={handleRender}>Export</Button> */}
          </div>
          <div
            style={{
              width: "280px",
              display: "flex",
              alignItems: "center",
              marginTop: "-24px",
            }}
          >
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
        </div>
      </div>

      <div style={{ flexGrow: 1, margin: "12px" }}>
        <Wrapper
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}
          render={render}
        >
          <Map
            center={center}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100%" }}
            areas={area}
          >
            <Marker position={center} />

            {showOffice &&
              buildA.map((item, i) => {
                return (
                  <Marker key={i} position={item.position} item={item} id={i} />
                );
              })}

            {showOffice &&
              buildB.map((item, i) => {
                return (
                  <Marker key={i} position={item.position} item={item} id={i} />
                );
              })}
            {dataList &&
              dataList.map((item, i) => {
                return (
                  <Marker
                    key={i}
                    position={item.position}
                    item={item}
                    id={i}
                    areas={area}
                    departments={department}
                  />
                );
              })}
          </Map>
        </Wrapper>
      </div>
    </div>
  );
};

export default App;

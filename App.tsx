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

import { arrPolygonPath } from "./components/Map";

const hcmCitys = ["Hồ Chí Minh", "Thủ Đức"];

function calCenter(paths) {
  const lats = paths.map((x) => x.lat);
  const lngs = paths.map((x) => x.lng);
  return {
    lat: (Math.max(...lats) + Math.min(...lats)) / 2,
    lng: (Math.max(...lngs) + Math.min(...lngs)) / 2,
  };
}

const inOfHcmStaffsObTemp = staffs
  .filter((x) => hcmCitys.includes(x.City))
  .reduce((a, b) => {
    a[b.District] = [...(a[b.District] || []), b];
    return a;
  }, {});

  

const inOfHcmStaffsAll = Object.keys(inOfHcmStaffsObTemp).map((key) => {
  let center = arrPolygonPath[key].center;
  if (!center.lat) {
    center = calCenter(arrPolygonPath[key].paths);
  }

  return {
    name: key,
    staffs: inOfHcmStaffsObTemp[key],
    position: center,
  };
});

const outOfHcmStaffsAll = staffs.filter((x) => !hcmCitys.includes(x.City));


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

  const [inOfHcmStaffs, setInOfHcmStaffs] = React.useState(inOfHcmStaffsAll);
  const [outOfHcmStaffs, setOutOfHcmStaffs] = React.useState(outOfHcmStaffsAll);

  function setFilter(arr) {
    const outOfHcmStaffs = arr.filter((x) => !hcmCitys.includes(x.City));
    setOutOfHcmStaffs(outOfHcmStaffs);
  }

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
      setFilter(dataFilter);
    } else if (
      department === "All" &&
      area === "All" &&
      year[0] === 0 &&
      year[1] === 15
    ) {
      setFilter(staffs);
    } else {
      setFilter([]);
    }
  }, [year, department, area]);

  return (
    <div className="d-flex flex-column h-100">
      <div className="m-12">
        <h3>Aperia Staff Map</h3>
        <div className="d-flex align-items-center">
          <div className="w-240 mr-24">
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
            {/* <Button onClick={handleRender1}>RENDER</Button>
            <Button onClick={handleRender}>Export</Button> */}
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
        </div>
      </div>

      <div className="flex-grow-1">
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
            <Marker position={center} type={"main office"} />

            {showOffice &&
              buildA.map((item, i) => {
                return (
                  <Marker
                    key={i}
                    id={i}
                    position={item.position}
                    type={"sub office"}
                    item={item}
                  />
                );
              })}

            {showOffice &&
              buildB.map((item, i) => {
                return (
                  <Marker
                    key={i}
                    id={i}
                    position={item.position}
                    type={"sub office"}
                    item={item}
                  />
                );
              })}

            {outOfHcmStaffs.map((item, i) => {
              return (
                <Marker
                  key={"outOfHcmStaffs" + i}
                  position={item.position}
                  item={item}
                  id={i}
                  type={"out hcm"}
                />
              );
            })}

            {inOfHcmStaffs.map((item, i) => {
              return (
                <Marker
                  key={"inOfHcmStaffs" + i + 10000}
                  position={item.position}
                  id={i + 10000}
                  type={"in hcm"}
                  staffs={item.staffs}
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

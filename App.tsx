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

import Map from './components/Map';
import Marker from './components/Marker';



import { buildA, buildB, staffs,  }  from "./data";
import * as data from './data';

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
          return +(ite.Seniorty || 0) >= year[0] && +(ite.Seniorty || 0) <= year[1];
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

  // const handleRender = () => {
  //   let arrDatas = [];
  //   let arrFailed = [];
  //   dtFaild.map((item) => {
  //     const obj = localStorage.getItem(`new-data-${item.Nickname}`);
  //     if(!obj) {
  //       arrFailed.push(item)
  //     } else {
  //       arrDatas.push(obj)
  //     }
  //   })

  //   localStorage.setItem('total-data', JSON.stringify(arrDatas))
  //   localStorage.setItem('total-data-failed', JSON.stringify(arrFailed))
  // }

  // const handleRender1 =() => {
  //   const dt = dataList.map((ite) => {
  //     const item = newData.filter((item) => item.Name.toLowerCase().trim() === ite.Nickname.toLowerCase().trim())
  //     let city = "";
  //     let newDistrict = "";
  //     let ward = "";
  //     let street = "";
  //     let fullAddress = "";

  //     if(item && item.length > 0 && item[0].Ward) {
  //       city = item[0].City;
  //       newDistrict = item[0].NewDistrict;
  //       ward = item[0].Ward;
  //       street = item[0].Street;
  //       fullAddress = `${street} ${ward} ${newDistrict} ${city}`
  //     } else if(item && item.length > 0 && item[0].FullAddress) {
  //       fullAddress = item[0].FullAddress
  //     }

  //     return {
  //       ...ite,
  //       City: city,
  //       NewDistrict: newDistrict,
  //       Ward: ward,
  //       Street: street,
  //       FullAddress: fullAddress
  //     }
  //   })

  //   localStorage.setItem('new-data', JSON.stringify(dt))

  //   // Convert address to Lat-Lng
  //   dtFaild.map((item) => {
  //     if(item.FullAddress !== '') {
  //       fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBQBHVcGXFXM9fp5k2PBLdRHntT5Y2miSQ&address=${item.FullAddress}`)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         if(responseJson.status === 'OK') {
  //           let obj = {
  //             ...item,
  //             position: responseJson.results[0].geometry.location
  //           }
  //           localStorage.setItem(`new-data-${item.Nickname}`, JSON.stringify(obj));
  //         }
  //       })
  //     }
  //   })
  // }

  return (
    <>
      <div style={{ margin: "8px", height: "10%" }}>
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
        <div style={{ display: "flex", marginBottom: "24px" }}>
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
      <div style={{ display: "flex", height: "90%" }}>
        <div id="marker-tooltip"></div>
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
            {(area === "All" || area === "DISTRICT 1") && (
              <Marker
                position={data.district1}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 1",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 2") && (
              <Marker
                position={data.district2}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 2",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 3") && (
              <Marker
                position={data.district3}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 3",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 4") && (
              <Marker
                position={data.district4}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 4",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 5") && (
              <Marker
                position={data.district5}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 5",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 6") && (
              <Marker
                position={data.district6}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 6",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 7") && (
              <Marker
                position={data.district7}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 7",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 8") && (
              <Marker
                position={data.district8}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 8",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 9") && (
              <Marker
                position={data.district9}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 9",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 10") && (
              <Marker
                position={data.district10}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 10",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 11") && (
              <Marker
                position={data.district11}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 11",
                }}
              />
            )}
            {(area === "All" || area === "DISTRICT 12") && (
              <Marker
                position={data.district12}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "DISTRICT 12",
                }}
              />
            )}

            {(area === "All" || area === "BINH CHANH") && (
              <Marker
                position={data.binhChanhDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "BINH CHANH",
                }}
              />
            )}
            {(area === "All" || area === "BINH TAN") && (
              <Marker
                position={data.binhTanDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "BINH TAN",
                }}
              />
            )}
            {(area === "All" || area === "BINH THANH") && (
              <Marker
                position={data.binhThanhDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "BINH THANH",
                }}
              />
            )}
            {(area === "All" || area === "CAN GIO") && (
              <Marker
                position={data.cangioDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "CAN GIO",
                }}
              />
            )}
            {(area === "All" || area === "CU CHI") && (
              <Marker
                position={data.cuChiDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "CU CHI",
                }}
              />
            )}
            {(area === "All" || area === "GO VAP") && (
              <Marker
                position={data.goVapDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "GO VAP",
                }}
              />
            )}
            {(area === "All" || area === "HOC MON") && (
              <Marker
                position={data.hocMonDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "HOC MON",
                }}
              />
            )}
            {(area === "All" || area === "PHU NHUAN") && (
              <Marker
                position={data.phuNhuanDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "PHU NHUAN",
                }}
              />
            )}
            {(area === "All" || area === "TAN BINH") && (
              <Marker
                position={data.tanBinhDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "TAN BINH",
                }}
              />
            )}
            {(area === "All" || area === "TAN PHU") && (
              <Marker
                position={data.tanPhuDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "TAN PHU",
                }}
              />
            )}
            {(area === "All" || area === "THU DUC") && (
              <Marker
                position={data.thuDucDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "THU DUC",
                }}
              />
            )}
            {(area === "All" || area === "NHA BE") && (
              <Marker
                position={data.nhaBeDistrict}
                label={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                  text: "NHA BE",
                }}
              />
            )}

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
    </>
  );
};

export default App;

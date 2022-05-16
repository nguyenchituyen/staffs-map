import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, Slider } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import data from './data';
import staffData from './staff';
import buildA from "./buildA";
import buildB from "./buildB";
import district from './district'
import positionCenter from './districtCenter'

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

// Define the LatLng coordinates for the polygon.
const vnm__ho_chi_minh__quan_1 = district.vnm__ho_chi_minh__quan_1
const vnm__ho_chi_minh__quan_2 = district.vnm__ho_chi_minh__quan_2
const vnm__ho_chi_minh__quan_3 = district.vnm__ho_chi_minh__quan_3
const vnm__ho_chi_minh__quan_4 = district.vnm__ho_chi_minh__quan_4
const vnm__ho_chi_minh__quan_5 = district.vnm__ho_chi_minh__quan_5
const vnm__ho_chi_minh__quan_6 = district.vnm__ho_chi_minh__quan_6
const vnm__ho_chi_minh__quan_7 = district.vnm__ho_chi_minh__quan_7
const vnm__ho_chi_minh__quan_8 = district.vnm__ho_chi_minh__quan_8
const vnm__ho_chi_minh__quan_9 = district.vnm__ho_chi_minh__quan_9
const vnm__ho_chi_minh__quan_10 = district.vnm__ho_chi_minh__quan_10
const vnm__ho_chi_minh__quan_11 = district.vnm__ho_chi_minh__quan_11
const vnm__ho_chi_minh__quan_12 = district.vnm__ho_chi_minh__quan_12

const vnm__ho_chi_minh__binh_chanh = district.vnm__ho_chi_minh__binh_chanh
const vnm__ho_chi_minh__binh_tan = district.vnm__ho_chi_minh__binh_tan
const vnm__ho_chi_minh__binh_thanh = district.vnm__ho_chi_minh__binh_thanh
const vnm__ho_chi_minh__can_gio = district.vnm__ho_chi_minh__can_gio
const vnm__ho_chi_minh__cu_chi = district.vnm__ho_chi_minh__cu_chi
const vnm__ho_chi_minh__go_vap = district.vnm__ho_chi_minh__go_vap
const vnm__ho_chi_minh__hoc_mon = district.vnm__ho_chi_minh__hoc_mon
const vnm__ho_chi_minh__phu_nhuan = district.vnm__ho_chi_minh__phu_nhuan
const vnm__ho_chi_minh__tan_binh = district.vnm__ho_chi_minh__tan_binh
const vnm__ho_chi_minh__tan_phu = district.vnm__ho_chi_minh__tan_phu
const vnm__ho_chi_minh__thu_duc = district.vnm__ho_chi_minh__thu_duc
const vnm__ho_chi_minh__nha_be = district.vnm__ho_chi_minh__nha_be

const marks = [
  {
    value: 0,
    label: '0 year',
  },
  {
    value: 15,
    label: '15 years',
  }
];

const App: React.VFC = () => {
  const [zoom, setZoom] = React.useState(12);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 10.8092805, //IBM Building location
    lng: 106.6660986,
  });

  const [dataList, setDataList] = React.useState(staffData);
  const [year, setYear] = React.useState([0, 15]);
  const [showOffice, setShowOffice] = React.useState(false);

  const [department, setDepartment] = React.useState('All');
  const handleChangeDepartment = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
  };

  const [area, setArea] = React.useState('All');
  const handleChangeArea = (event: SelectChangeEvent) => {
    setArea(event.target.value as string);
  };

  const handleOnChangeYear = (e) => {
    setYear(e.target.value as number[]);
  }

  const handleChangeShowOffice = (e) => {
    setShowOffice(!showOffice)
  }

  React.useEffect(() => {
    let dataFilter = staffData;
    if((department !== "" && department !== 'All') || (area !== "" && area !== 'All') || (year[0] !== 0 || year[1] !== 15)) {
      
      if(department !== 'All') {
        dataFilter = dataFilter.filter((ite) => ite.Department === department);
      }

      if(area !== 'All') {
        dataFilter = dataFilter.filter((ite) => ite.District === area);
      }

      if(year[0] !== 0 || year[1] !== 15) {
        dataFilter = dataFilter.filter((ite) => {
          return ite.Seniorty + 0 >= year[0] && ite.Seniorty + 0 <= year[1]
        });
      }
      setDataList(dataFilter);
    } else if(department === "All" && area === "All" && year[0] === 0 && year[1] === 15){
      setDataList(staffData);
    } else {
      setDataList([]);
    }
  }, [year, department, area])

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
      <div style={{margin: '8px', height: '10%'}}>
        <h3 style={{fontSize: '24px', lineHeight: '36px', letterSpacing: '2.5px', fontWeight: '700',  color: '#18181d'}}>Aperia Staff Map </h3>
        <div style={{display: 'flex', marginBottom: '24px'}}>
          <div style={{width: '280px', marginRight: '24px'}}>
            <FormControl fullWidth>
              <InputLabel id="select-label-department">Department</InputLabel>
              <Select
                labelId="select-label-department"
                id="demo-simple-select"
                value={department}
                label="Department"
                onChange={handleChangeDepartment}
              >
              {data.departmentDatas.map((ite, i) => <MenuItem key={i}  value={ite.name}>{ite.name}</MenuItem>)}
            </Select>
            </FormControl>
          </div>
          <div style={{width: '280px', marginRight: '38px'}}>
            <FormControl fullWidth>
            <InputLabel id="select-label-area">Area</InputLabel>
              <Select
                labelId="select-label-area"
                id="demo-simple-select"
                value={area}
                label="Area"
                onChange={handleChangeArea}
              >
              {data.areaDatas.map((ite, i) => <MenuItem key={i} value={ite.name}>{ite.name}</MenuItem>)}
            </Select>
            </FormControl>
          </div>
          <div style={{width: '280px', display: 'flex', alignItems: 'center', marginRight: '60px'}}>
            <FormControl fullWidth>
              <Slider step={0.5} getAriaLabel={() => 'Year range'} defaultValue={1} aria-label="Default" valueLabelDisplay="auto" max={15} min={0} marks={marks} value={year} onChange={handleOnChangeYear} />
            </FormControl>
            {/* <Button onClick={handleRender1}>RENDER</Button>
            <Button onClick={handleRender}>Export</Button> */}
          </div>
          <div style={{width: '280px', display: 'flex', alignItems: 'center', marginTop: '-24px'}}>
            <FormGroup>
              <FormControlLabel control={<Switch value={showOffice} onChange={handleChangeShowOffice} />} label="Available Offices" />
            </FormGroup>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: "90%" }}>
        <div id="marker-tooltip"></div>
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!} render={render}>
          <Map
            center={center}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100%" }}
            areas={area}
          >
            <Marker position={center}/>
            {
              (area === 'All' || area === 'DISTRICT 1') && <Marker position={positionCenter.district1} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 1"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 2') && <Marker position={positionCenter.district2} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 2"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 3') && <Marker position={positionCenter.district3} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 3"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 4') && <Marker position={positionCenter.district4} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 4"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 5') && <Marker position={positionCenter.district5} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 5"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 6') && <Marker position={positionCenter.district6} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 6"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 7') && <Marker position={positionCenter.district7} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 7"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 8') && <Marker position={positionCenter.district8} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 8"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 9') && <Marker position={positionCenter.district9} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 9"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 10') && <Marker position={positionCenter.district10} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 10"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 11') && <Marker position={positionCenter.district11} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 11"}} />
            }
            {
              (area === 'All' || area === 'DISTRICT 12') && <Marker position={positionCenter.district12} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"DISTRICT 12"}} />
            }


            {
              (area === 'All' || area === 'BINH CHANH') && <Marker position={positionCenter.binhChanhDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"BINH CHANH"}}/>
            }
            {
              (area === 'All' || area === 'BINH TAN') && <Marker position={positionCenter.binhTanDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"BINH TAN"}}/>
            }
            {
              (area === 'All' || area === 'BINH THANH') && <Marker position={positionCenter.binhThanhDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"BINH THANH"}}/>
            }
            {
              (area === 'All' || area === 'CAN GIO') && <Marker position={positionCenter.cangioDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"CAN GIO"}}/>
            }
            {
              (area === 'All' || area === 'CU CHI') && <Marker position={positionCenter.cuChiDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"CU CHI"}}/>
            }
            {
              (area === 'All' || area === 'GO VAP') && <Marker position={positionCenter.goVapDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"GO VAP"}}/>
            }
            {
              (area === 'All' || area === 'HOC MON') && <Marker position={positionCenter.hocMonDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"HOC MON"}}/>
            }
            {
              (area === 'All' || area === 'PHU NHUAN') && <Marker position={positionCenter.phuNhuanDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"PHU NHUAN"}}/>
            }
            {
              (area === 'All' || area === 'TAN BINH') && <Marker position={positionCenter.tanBinhDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"TAN BINH"}}/>
            }
            {
              (area === 'All' || area === 'TAN PHU') && <Marker position={positionCenter.tanPhuDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"TAN PHU"}}/>
            }
            {
              (area === 'All' || area === 'THU DUC') && <Marker position={positionCenter.thuDucDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"THU DUC"}}/>
            }
            {
              (area === 'All' || area === 'NHA BE') && <Marker position={positionCenter.nhaBeDistrict} label={{color: "#000000", fontSize: "16px", fontWeight: "600", text:"NHA BE"}}/>
            }

            {
              showOffice && buildA.map((item, i) => {
                return <Marker 
                    key={i} 
                    position={item.position}
                    item={item}
                    id={i}
                  />})
            }
            {
              showOffice && buildB.map((item, i) => {
                return <Marker 
                    key={i} 
                    position={item.position}
                    item={item}
                    id={i}
                  />})
            }
            {dataList && dataList.map((item, i) => {
              return <Marker 
                  key={i}
                  position={item.position}
                  item={item}
                  id={i}
                  areas={area}
                  departments={department}
                />})
            }
          </Map>
        </Wrapper>
      </div>
    </>
  );
};

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  areas: string;
}

const Map: React.FC<MapProps> = ({
  children,
  style,
  areas,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  // Construct the polygon.
  const district1 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_1,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  const district2 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_2,
    strokeColor: "#00ff62",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#00ff62",
    fillOpacity: 0.35,
  });
  const district3 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_3,
    strokeColor: "#0088ff",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#0088ff",
    fillOpacity: 0.35,
  });
  const district4 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_4,
    strokeColor: "#ff00f7",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#ff00f7",
    fillOpacity: 0.35,
  });
  const district5 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_5,
    strokeColor: "#00bbff",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#00bbff",
    fillOpacity: 0.35,
  });
  const district6 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_6,
    strokeColor: "#ddff00",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#ddff00",
    fillOpacity: 0.35,
  });
  const district7 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_7,
    strokeColor: "#a6ff00",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#a6ff00",
    fillOpacity: 0.35,
  });
  const district8 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_8,
    strokeColor: "#00f2ff",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#00f2ff",
    fillOpacity: 0.35,
  });
  const district9 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_9,
    strokeColor: "#006aff",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#006aff",
    fillOpacity: 0.35,
  });
  const district10 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_10,
    strokeColor: "#F39C12",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#F39C12",
    fillOpacity: 0.35,
  });
  const district11 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_11,
    strokeColor: "#eeff00",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#eeff00",
    fillOpacity: 0.35,
  });
  const district12 = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__quan_12,
    strokeColor: "#ffb300",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#ffb300",
    fillOpacity: 0.35,
  });


  const binhChanhDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__binh_chanh,
    strokeColor: "#E6B0AA",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#E6B0AA",
    fillOpacity: 0.35,
  });
  const binhTanDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__binh_tan,
    strokeColor: "#ffb300",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#ffb300",
    fillOpacity: 0.35,
  });
  const binhThanhDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__binh_thanh,
    strokeColor: "#D2B4DE",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#D2B4DE",
    fillOpacity: 0.35,
  });
  const canGioDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__can_gio,
    strokeColor: "#ffb300",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#ffb300",
    fillOpacity: 0.35,
  });
  const cuChiDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__cu_chi,
    strokeColor: "#D6EAF8",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#D6EAF8",
    fillOpacity: 0.35,
  });
  const goVapDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__go_vap,
    strokeColor: "#A93226",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#A93226",
    fillOpacity: 0.35,
  });
  const hocMonDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__hoc_mon,
    strokeColor: "#73C6B6",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#73C6B6",
    fillOpacity: 0.35,
  });
  const phuNhuanDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__phu_nhuan,
    strokeColor: "#85C1E9",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#85C1E9",
    fillOpacity: 0.35,
  });
  const tanBinhDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__tan_binh,
    strokeColor: "#52BE80 ",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#52BE80",
    fillOpacity: 0.35,
  });
  const tanPhuDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__tan_phu,
    strokeColor: "#F39C12",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#F39C12",
    fillOpacity: 0.35,
  });
  const thuDucDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__thu_duc,
    strokeColor: "#633974",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#633974",
    fillOpacity: 0.35,
  });
  const nhaBeDistrict = new google.maps.Polygon({
    paths: vnm__ho_chi_minh__nha_be,
    strokeColor: "#E67E22",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#E67E22",
    fillOpacity: 0.35,
  });

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  const myStyles =[
    {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        { 
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "all",
      "stylers": [
        { 
          "visibility": "off"
        }
      ]
    },
  ];

  React.useEffect(() => {
    if (map && areas === 'All') {
      district1.setMap(map);
      district2.setMap(map);
      district3.setMap(map);
      district4.setMap(map);
      district5.setMap(map);
      district6.setMap(map);
      district7.setMap(map);
      district8.setMap(map);
      district9.setMap(map);
      district10.setMap(map);
      district11.setMap(map);
      district12.setMap(map);

      binhChanhDistrict.setMap(map);
      binhTanDistrict.setMap(map);
      binhThanhDistrict.setMap(map);
      canGioDistrict.setMap(map);
      cuChiDistrict.setMap(map);
      goVapDistrict.setMap(map);
      hocMonDistrict.setMap(map);
      phuNhuanDistrict.setMap(map);
      tanBinhDistrict.setMap(map);
      tanPhuDistrict.setMap(map);
      thuDucDistrict.setMap(map);
      nhaBeDistrict.setMap(map);
    } else if(map) {
        switch(areas) {
        case 'DISTRICT 1':
          district1.setMap(map);
          break;
        case 'DISTRICT 2':
          district2.setMap(map);
          break;
        case 'DISTRICT 3':
          district3.setMap(map);
        break;
        case 'DISTRICT 4':
          district4.setMap(map);
        break;
        case 'DISTRICT 5':
          district5.setMap(map);
        break;
        case 'DISTRICT 6':
          district6.setMap(map);
        break;
        case 'DISTRICT 7':
          district7.setMap(map);
        break;
        case 'DISTRICT 8':
          district8.setMap(map);
        break;
        case 'DISTRICT 9':
          district9.setMap(map);
        break;
        case 'DISTRICT 10':
          district10.setMap(map);
        break;
        case 'DISTRICT 11':
          district11.setMap(map);
        break;
        case 'DISTRICT 12':
          district12.setMap(map);
        break;
        case 'THU DUC':
          thuDucDistrict.setMap(map);
        break;
        case 'BINH THANH':
          binhThanhDistrict.setMap(map);
        break;
        case 'GO VAP':
          goVapDistrict.setMap(map);
        break;
        case 'BINH TAN':
          binhTanDistrict.setMap(map);
        break;
        case 'TAN BINH':
          tanBinhDistrict.setMap(map);
        break;
        case 'TAN PHU':
          tanPhuDistrict.setMap(map);
        break;
        case 'PHU NHUAN':
          phuNhuanDistrict.setMap(map);
        break;
        case 'DONG NAI':
        break;
        case 'HOC MON':
          hocMonDistrict.setMap(map);
        break;
        case 'BINH DUONG':
        break;
      }
    }
  }, [map, areas]);

  React.useEffect(() => {
    if (areas !== 'All') {
      setMap(null);
    }
  }, [areas]);

  React.useEffect(() => {
    if (map) {
      map.setOptions({
        options,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: myStyles,
        zoom: map.getZoom() || options.zoom
      });
    }
  }, [map, options]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  
  React.useEffect(() => {
    if (marker) {

      if(options.item && !options.item.office) {
        marker.setOptions({
          options,
          cursor: 'auto',
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#002BFF',
              fillOpacity: 0.8,
              strokeWeight: 0.4
            }
          }
        });
      } else if(options.item && options.item.office){
        marker.setOptions({
          options,
          ...{
            icon: {
              url: options.item.office === "A" ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" : "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
            }
          }
        });
      } else if(options.label) {
        marker.setOptions({
          options,
          cursor: 'auto',
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 0,
              fillColor: '#ecedf2',
              fillOpacity: 0,
              strokeWeight: 0
            },
          }
        });
      } else {
         marker.setOptions(options);
      }

      let infowindow: any;
      let infoContent: any;
      if(!options?.item) {
        infoContent =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h3 id="firstHeading" class="firstHeading">Aperia</h3>' +
          '<div id="bodyContent">' +
          "<p><b>Address:</b> " +
          "12 Song Thao, Ward 2, Tan Binh District, Ho Chi Minh City, Vietnam" +
          "</p>" +
          "</div>" +
          "</div>";
      }

      
      if(options.item &&  options.item.office) {
        infoContent =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h3 id="firstHeading" class="firstHeading">' + options.item.BuildingName +
          ' - Grade ' + options.item.office +
          '</h3>' +
          '<div id="bodyContent">' +
          "<p><b>Premises:</b> "
          + options.item.Premises +
          "</p>" +
          "<p><b>Floor:</b> "
          + options.item.Floor +
          "</p>" +
          "<p><b>Vacant Status:</b> "
          + options.item.VacantStatus +
          "</p>" +
          "<p><b>Asking Rent (VAT excluded):</b> "
          + options.item.AskingRent +
          "</p>" +
          "<p><b>Gross Rent (VAT excluded):</b> "
          + options.item.GrossRent +
          "</p>" +
          "<p><b>Service Charge (VAT excluded):</b> "
          + options.item.ServiceCharge +
          "</p>" +
          "<p><b>Total Amount (VAT excluded):</b> "
          + options.item.TotalAmount +
          "</p>" +
          "<p><b>Address:</b> "
          + options.item.Address +
          "</p>" +
          "</div>" +
          "</div>";

        
      }

      infowindow = new google.maps.InfoWindow({
        content: infoContent
      });
      if(infowindow && (!options?.item || options.item && options.item.office)) {
        marker.addListener('mouseover', function() {
          infowindow.open({
            anchor: marker,
            map: marker.map,
            shouldFocus: false,
          });
        });
        marker.addListener('mouseout', function() {
          infowindow.close();
        });
      }
    }
  }, [marker, options]);

  return null;
};

window.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("root"));
});


export {};

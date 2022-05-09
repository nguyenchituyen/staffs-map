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
import staffData from './staff4';
import datatest from './convert-test';
import buildA from "./buildA";
import buildB from "./buildB";


const render = (status: Status) => {
  return <h1>{status}</h1>;
};

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

  const handleRender = () => {
    let arrDatas = [];
    for(let i = 0; i < 305; i ++) {
      const item = localStorage.getItem(`test-data-${i}`);
      arrDatas.push(item)
      localStorage.setItem('total-data', JSON.stringify(arrDatas))
    }
  }

  const handleRender1 =() => {
    const dt = datatest.map((ite) => {
      const item = dataList.filter((item) => item.Nickname === ite.Nickname)
      let district = "";
      let position = null;
      if(item) {
        district = item[0].District;
        position = item[0].position;
      }
      return {
        ...ite,
        District: district,
        position
      }
    })

    localStorage.setItem('total-dt', JSON.stringify(dt))
  }

  return (
    <>
      <div style={{margin: '24px'}}>
        <h1 style={{fontSize: '24px', lineHeight: '36px', letterSpacing: '2.5px', fontWeight: '700',  color: '#18181d'}}>Aperia Staff Map </h1>
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
            {/* <Button onClick={handleRender1}>RENDER</Button> */}
          </div>
          <div style={{width: '280px', display: 'flex', alignItems: 'center', marginTop: '-24px'}}>
            <FormGroup>
              <FormControlLabel control={<Switch value={showOffice} onChange={handleChangeShowOffice} />} label="Available Offices" />
            </FormGroup>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <div id="marker-tooltip"></div>
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!} render={render}>
          <Map
            center={center}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100%" }}
          >
            <Marker position={center}/>
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
            {!showOffice && dataList && dataList.map((item, i) => {
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
}

const Map: React.FC<MapProps> = ({
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  const myStyles =[
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
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
              "visibility": "on"
          }
      ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
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
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        { 
          "visibility": "off"
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
    if (map) {
      map.setOptions({
        options,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: myStyles
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
  
  // const geocodeAddress = (address, id) => {
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDhC3MaEgg0iXTbzFsHfEaTtz9NVD-mxOI&address=${address}`)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         if(responseJson.status === 'OK') {
  //           localStorage.setItem(`test-data-${id}`, JSON.stringify({
  //             ...options.item,
  //             potision: responseJson.results[0].geometry.location
  //           }));
  //         }
  //       })   
  // }

  React.useEffect(() => {
    if (marker) {
      // geocodeAddress(options.item.address, options.id);
      // const colorFill = departments === '' || departments === 'All' ? "#FF0000" : data.bgColor[options.item.Department]

      if(options.item && !options.item.office) {
        marker.setOptions({
          options,
          cursor: 'auto',
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8.5,
              fillColor: data.bgColor[options.item?.Department],
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

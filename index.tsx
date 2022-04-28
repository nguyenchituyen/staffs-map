import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import data from './data';
import staffData from './staff2';


const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const App: React.VFC = () => {
  const [zoom, setZoom] = React.useState(12);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 10.8092805, //IBM Building location
    lng: 106.6663751,
  });

  const [dataList, setDataList] = React.useState(staffData);

  const [department, setDepartment] = React.useState('');
  const handleChangeDepartment = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
    const dataFilter = staffData.filter((ite) => ite.Department === event.target.value);
    if(dataFilter && dataFilter.length > 0) {
      setDataList(dataFilter);
    } else if(event.target.value === 'All') {
      setDataList(staffData);
    } else {
      setDataList([]);
    }
  };

  const [area, setArea] = React.useState('');
  const handleChangeArea = (event: SelectChangeEvent) => {
    setArea(event.target.value as string);
    const dataFilter = staffData.filter((ite) => ite.District === event.target.value);
    if(dataFilter && dataFilter.length > 0) {
      setDataList(dataFilter);
    } else if(event.target.value === 'All') {
      setDataList(staffData);
    } else {
      setDataList([]);
    }
  };

  const handleRender = () => {
    let arrDatas = [];
    for(let i = 0; i < 305; i ++) {
      const item = localStorage.getItem(`test-data-${i}`);
      arrDatas.push(item)
      localStorage.setItem('total-data', JSON.stringify(arrDatas))
    }
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
          <div style={{width: '280px'}}>
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
            {/* <Button onClick={handleRender}>RENDER</Button> */}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!} render={render}>
          <Map
            center={center}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100%" }}
          >
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
      "featureType": "road",
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
        styles: myStyles , 
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
  const { departments, areas } = options;

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
  

  const geocodeAddress = (address, id) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDhC3MaEgg0iXTbzFsHfEaTtz9NVD-mxOI&address=${address}`)
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status === 'OK') {
            localStorage.setItem(`test-data-${id}`, JSON.stringify({
              ...options.item,
              potision: responseJson.results[0].geometry.location
            }));
          }
        })
        
  }

  React.useEffect(() => {
    if (marker) {
      // geocodeAddress(options.item.address, options.id);
      // const colorFill = departments === '' || departments === 'All' ? "#FF0000" : data.bgColor[options.item.Department]
      marker.setOptions({
        options,
        ...{
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8.5,
            fillColor: data.bgColor[options.item.Department],
            fillOpacity: 0.8,
            strokeWeight: 0.4
          }
        }
      });
    }
  }, [marker, options]);

  return null;
};

window.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("root"));
});


export {};

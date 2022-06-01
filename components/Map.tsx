import * as React from "react";
import * as district  from '../data';



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


interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  areas: string;
  children: any
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
      setMap(undefined);
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


export default Map;

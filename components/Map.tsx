import * as React from "react";
import * as district from "../data";

// Define the LatLng coordinates for the polygon.
const hcm_d_1 = district.hcm_d_1;
const hcm_d_2 = district.hcm_d_2;
const hcm_d_3 = district.hcm_d_3;
const hcm_d_4 = district.hcm_d_4;
const hcm_d_5 = district.hcm_d_5;
const hcm_d_6 = district.hcm_d_6;
const hcm_d_7 = district.hcm_d_7;
const hcm_d_8 = district.hcm_d_8;
const hcm_d_9 = district.hcm_d_9;
const hcm_d_10 = district.hcm_d_10;
const hcm_d_11 = district.hcm_d_11;
const hcm_d_12 = district.hcm_d_12;
const hcm_d_binhchanh = district.hcm_d_binhchanh;
const hcm_d_binhtan = district.hcm_d_binhtan;
const hcm_d_binhthanh = district.hcm_d_binhthanh;
const hcm_d_cangio = district.hcm_d_cangio;
const hcm_d_cuchi = district.hcm_d_cuchi;
const hcm_d_govap = district.hcm_d_govap;
const hcm_d_hoocmon = district.hcm_d_hoocmon;
const hcm_d_phunhuan = district.hcm_d_phunhuan;
const hcm_d_tanbinh = district.hcm_d_tanbinh;
const hcm_d_tanphu = district.hcm_d_tanphu;
const hcm_d_thuduc = district.hcm_d_thuduc;
const hcm_d_nhabe = district.hcm_d_nhabe;

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  areas: string;
  children: any;
}

const Map: React.FC<MapProps> = ({ children, style, areas, ...options }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  // Construct the polygon.
  const district1 = new google.maps.Polygon({
    paths: hcm_d_1,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district2 = new google.maps.Polygon({
    paths: hcm_d_2,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district3 = new google.maps.Polygon({
    paths: hcm_d_3,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district4 = new google.maps.Polygon({
    paths: hcm_d_4,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district5 = new google.maps.Polygon({
    paths: hcm_d_5,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district6 = new google.maps.Polygon({
    paths: hcm_d_6,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district7 = new google.maps.Polygon({
    paths: hcm_d_7,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district8 = new google.maps.Polygon({
    paths: hcm_d_8,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district9 = new google.maps.Polygon({
    paths: hcm_d_9,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district10 = new google.maps.Polygon({
    paths: hcm_d_10,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,

  });
  const district11 = new google.maps.Polygon({
    paths: hcm_d_11,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const district12 = new google.maps.Polygon({
    paths: hcm_d_12,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });

  const binhChanhDistrict = new google.maps.Polygon({
    paths: hcm_d_binhchanh,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const binhTanDistrict = new google.maps.Polygon({
    paths: hcm_d_binhtan,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const binhThanhDistrict = new google.maps.Polygon({
    paths: hcm_d_binhthanh,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const canGioDistrict = new google.maps.Polygon({
    paths: hcm_d_cangio,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const cuChiDistrict = new google.maps.Polygon({
    paths: hcm_d_cuchi,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const goVapDistrict = new google.maps.Polygon({
    paths: hcm_d_govap,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const hocMonDistrict = new google.maps.Polygon({
    paths: hcm_d_hoocmon,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const phuNhuanDistrict = new google.maps.Polygon({
    paths: hcm_d_phunhuan,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const tanBinhDistrict = new google.maps.Polygon({
    paths: hcm_d_tanbinh,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const tanPhuDistrict = new google.maps.Polygon({
    paths: hcm_d_tanphu,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const thuDucDistrict = new google.maps.Polygon({
    paths: hcm_d_thuduc,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });
  const nhaBeDistrict = new google.maps.Polygon({
    paths: hcm_d_nhabe,
    strokeColor: "FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.1,
  });

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  const myStyles = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  React.useEffect(() => {
    if (map && areas === "All") {
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

      
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < district12.getPath().getLength(); i++) {
        bounds.extend(district12.getPath().getAt(i));
      }

      var infowindow = new google.maps.InfoWindow();

      function mousefn(event) {
        infowindow.setContent(
          'District 12'
        );
        infowindow.setPosition(bounds.getCenter());
        infowindow.open(map);
      }

      google.maps.event.addListener(district12, "mouseover", mousefn);
      // google.maps.event.addListener(mrpdPolygon, 'mousemove', mousefn);
      google.maps.event.addListener(district12, "mouseout", function (event) {
        infowindow.close();
      });

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
    } else if (map) {
      switch (areas) {
        case "DISTRICT 1":
          district1.setMap(map);
          break;
        case "DISTRICT 2":
          district2.setMap(map);
          break;
        case "DISTRICT 3":
          district3.setMap(map);
          break;
        case "DISTRICT 4":
          district4.setMap(map);
          break;
        case "DISTRICT 5":
          district5.setMap(map);
          break;
        case "DISTRICT 6":
          district6.setMap(map);
          break;
        case "DISTRICT 7":
          district7.setMap(map);
          break;
        case "DISTRICT 8":
          district8.setMap(map);
          break;
        case "DISTRICT 9":
          district9.setMap(map);
          break;
        case "DISTRICT 10":
          district10.setMap(map);
          break;
        case "DISTRICT 11":
          district11.setMap(map);
          break;
        case "DISTRICT 12":
          district12.setMap(map);
          break;
        case "THU DUC":
          thuDucDistrict.setMap(map);
          break;
        case "BINH THANH":
          binhThanhDistrict.setMap(map);
          break;
        case "GO VAP":
          goVapDistrict.setMap(map);
          break;
        case "BINH TAN":
          binhTanDistrict.setMap(map);
          break;
        case "TAN BINH":
          tanBinhDistrict.setMap(map);
          break;
        case "TAN PHU":
          tanPhuDistrict.setMap(map);
          break;
        case "PHU NHUAN":
          phuNhuanDistrict.setMap(map);
          break;
        case "DONG NAI":
          break;
        case "HOC MON":
          hocMonDistrict.setMap(map);
          break;
        case "BINH DUONG":
          break;
      }
    }
  }, [map, areas]);

  React.useEffect(() => {
    if (areas !== "All") {
      setMap(undefined);
    }
  }, [areas]);

  React.useEffect(() => {
    if (map) {
      map.setOptions({
        options,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: myStyles,
        zoom: map.getZoom() || options.zoom,
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

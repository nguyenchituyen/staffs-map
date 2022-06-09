import * as React from "react";
import * as district from "../data";

interface PolygonCustom {
  name: string;
  polygon: google.maps.Polygon;
}

export const arrPolygonPath = {
  "DISTRICT 1": {
    paths: district.hcm_d_1,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 2": {
    paths: district.hcm_d_2,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 3": {
    paths: district.hcm_d_3,
    center: {
      lat: 10.7843695,
      lng: 106.6844089,
    },
  },
  "DISTRICT 4": {
    paths: district.hcm_d_4,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 5": {
    paths: district.hcm_d_5,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 6": {
    paths: district.hcm_d_6,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 7": {
    paths: district.hcm_d_7,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 8": {
    paths: district.hcm_d_8,
    center: {
      lat: 10.7285473,
      lng: 106.6364885,
    },
  },
  "DISTRICT 9": {
    paths: district.hcm_d_9,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 10": {
    paths: district.hcm_d_10,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 11": {
    paths: district.hcm_d_11,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "DISTRICT 12": {
    paths: district.hcm_d_12,
    center: {
      lat: 10.8771531,
      lng: 106.6713322,
    },
  },
  "BINH CHANH": {
    paths: district.hcm_d_binhchanh,
    center: {
      lat: 10.7436552,
      lng: 106.5222933,
    },
  },
  "BINH TAN": {
    paths: district.hcm_d_binhtan,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "BINH THANH": {
    paths: district.hcm_d_binhthanh,
    center: {
      lat: 10.8105831,
      lng: 106.7091422,
    },
  },
  "CAN GIO": {
    paths: district.hcm_d_cangio,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "CU CHI": {
    paths: district.hcm_d_cuchi,
    center: {
      lat: 10.992192,
      lng: 106.5265434,
    },
  },
  "GO VAP": {
    paths: district.hcm_d_govap,
    center: {
      lat: 10.8446779,
      lng: 106.6652904,
    },
  },
  "HOC MON": {
    paths: district.hcm_d_hoocmon,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "PHU NHUAN": {
    paths: district.hcm_d_phunhuan,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "TAN BINH": {
    paths: district.hcm_d_tanbinh,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "TAN PHU": {
    paths: district.hcm_d_tanphu,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "THU DUC": {
    paths: district.hcm_d_thuduc,
    center: {
      lat: 0,
      lng: 0,
    },
  },
  "NHA BE": {
    paths: district.hcm_d_nhabe,
    center: {
      lat: 0,
      lng: 0,
    },
  },
};

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  areas: string;
  children: any;
  sendToZoom: any;
}

const styleMap = [
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        color: "#878787",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
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
        color: "#f9f5ed",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#aee0f4",
      },
    ],
  },
];

const Map: React.FC<MapProps> = ({
  children,
  style,
  areas,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [arrPolygon, setArrPolygon] = React.useState([] as PolygonCustom[]);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: options.center,
          zoom: options.zoom,
          styles: styleMap,
        })
      );

      const arr = Object.keys(arrPolygonPath).map((key) => ({
        name: key,
        polygon: new google.maps.Polygon({
          paths: arrPolygonPath[key].paths,
          strokeColor: "#1671E0",
          strokeOpacity: 1,
          strokeWeight: 0.5,
          fillColor: "#B2D7FC",
          fillOpacity: 0.3,
        }),
      }));
      setArrPolygon(arr);
    }
  }, [ref, map]);

  const polygonBinding = React.useCallback(
    (p: PolygonCustom) => {
      if (map) {
        p.polygon.setMap(map);

        p.polygon.addListener("click", () => {
          var bounds = new google.maps.LatLngBounds();
          for (var i = 0; i < p.polygon.getPath().getLength(); i++) {
            bounds.extend(p.polygon.getPath().getAt(i));
          }
          map?.setCenter(bounds.getCenter());
          map?.setZoom(13);
        });

        p.polygon.setValues({});

        p.polygon.addListener("mouseover", () => {
          p.polygon.setOptions({
            fillColor: "#1671E0",
            fillOpacity: 0.4,
          });
        });
        p.polygon.addListener("mouseout", () => {
          p.polygon.setOptions({
            fillColor: "#B2D7FC",
            fillOpacity: 0.3,
          });
        });
      }
    },
    [map]
  );

  React.useEffect(() => {
    if (map) {
      const poligons = arrPolygon.filter(
        (x) => areas === "All" || x.name === areas
      );
      poligons.forEach((p) => {
        polygonBinding(p);
      });
    }
  }, [map, areas]);

  React.useEffect(() => {
    if (map) {
      map.addListener("zoom_changed", () => {
        options.sendToZoom(map.getZoom());
      });
    }
  }, [map]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map } as any);
        }
      })}
    </>
  );
};

export default Map;

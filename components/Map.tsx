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
      lat: 0,
      lng: 0,
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
      lat: 0,
      lng: 0,
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
      lat: 0,
      lng: 0,
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
      lat: 0,
      lng: 0,
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
      lat: 0,
      lng: 0,
    },
  },
  "GO VAP": {
    paths: district.hcm_d_govap,
    center: {
      lat: 0,
      lng: 0,
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
}

const Map: React.FC<MapProps> = ({ children, style, areas, ...options }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [arrPolygon, setArrPolygon] = React.useState([] as PolygonCustom[]);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: options.center,
          zoom: options.zoom,
        })
      );

      const arr = Object.keys(arrPolygonPath).map((key) => ({
        name: key,
        polygon: new google.maps.Polygon({
          paths: arrPolygonPath[key].paths,
          strokeColor: "#FF0000",
          strokeOpacity: 0.5,
          strokeWeight: 0.5,
          fillColor: "#F5EF01",
          fillOpacity: 0.2,
        }),
      }));
      setArrPolygon(arr);
    }
  }, [ref, map]);

  var infowindow = new google.maps.InfoWindow();
  const polygonBinding = (p: PolygonCustom) => {
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

      p.polygon.addListener("mouseover", (e) => {
        p.polygon.setOptions({
          fillColor:"#FF0000",
          fillOpacity: 0.1
        });

        infowindow.setContent(p.name);
        infowindow.setPosition({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
        infowindow.open(map);
      });
      p.polygon.addListener("mousemove", (e) => {
        infowindow.setPosition({
          lat: e.latLng.lat() + 0.002,
          lng: e.latLng.lng(),
        });
      });
      p.polygon.addListener("mouseout", () => {
        p.polygon.setOptions({
          fillColor:"#F5EF01",
          fillOpacity: 0.1
        });

        infowindow.close();
      });
    }
  };

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
    if (areas !== "All") {
      setMap(undefined);
    }
  }, [areas]);

  React.useEffect(() => {
    if (map) {
      map.setOptions({
        options,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: map.getZoom() || options.zoom,
      } as any);
    }
  }, [map, options]);

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

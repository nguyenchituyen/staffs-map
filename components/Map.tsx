import * as React from "react";
import * as district from "../data";

interface PolygonCustom {
  name: string;
  polygon: google.maps.Polygon;
}

const arrL = {
  "DISTRICT 1": district.hcm_d_1,
  "DISTRICT 2": district.hcm_d_2,
  "DISTRICT 3": district.hcm_d_3,
  "DISTRICT 4": district.hcm_d_4,
  "DISTRICT 5": district.hcm_d_5,
  "DISTRICT 6": district.hcm_d_6,
  "DISTRICT 7": district.hcm_d_7,
  "DISTRICT 8": district.hcm_d_8,
  "DISTRICT 9": district.hcm_d_9,
  "DISTRICT 10": district.hcm_d_10,
  "DISTRICT 11": district.hcm_d_11,
  "DISTRICT 12": district.hcm_d_12,
  "BINH CHANH": district.hcm_d_binhchanh,
  "BINH TAN": district.hcm_d_binhtan,
  "BINH THANH": district.hcm_d_binhthanh,
  "CAN GIO": district.hcm_d_cangio,
  "CU CHI": district.hcm_d_cuchi,
  "GO VAP": district.hcm_d_govap,
  "HOC MON": district.hcm_d_hoocmon,
  "PHU NHUAN": district.hcm_d_phunhuan,
  "TAN BINH": district.hcm_d_tanbinh,
  "TAN PHU": district.hcm_d_tanphu,
  "THU DUC": district.hcm_d_thuduc,
  "NHA BE": district.hcm_d_nhabe,
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

      const arr = Object.keys(arrL).map((key) => ({
        name: key,
        polygon: new google.maps.Polygon({
          paths: arrL[key],
          strokeColor: "FF0000",
          strokeOpacity: 1,
          strokeWeight: 1,
          fillColor: "#FF0000",
          fillOpacity: 0,
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
          fillOpacity: 0.1,
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
          fillOpacity: 0,
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

import * as React from "react";
import { staffs } from "../data";
import  {styleMap, arrPolygonPath } from "../data/constant"

interface PolygonCustom {
  name: string;
  polygon: google.maps.Polygon;
}

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  areas: string;
  children: any;
  sendToZoom?: any;
  showHeatMaps?: boolean;
  typeEmployees?: string;
}



const Map: React.FC<MapProps> = ({
  children,
  style,
  areas,
  showHeatMaps,
  typeEmployees,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [arrPolygon, setArrPolygon] = React.useState([] as PolygonCustom[]);
  const [heatMap, setHeatMap] =
    React.useState<google.maps.visualization.HeatmapLayer | null>(null);

  const heatMapData = staffs.map((item) => new google.maps.LatLng(item.position.lat, item.position.lng));
    

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
          strokeColor: "#757585",
          strokeOpacity: 1,
          strokeWeight: 0.5,
          fillColor: "#D2D2D6",
          fillOpacity: 0.2,
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
            fillColor: "#D2D2D6",
            fillOpacity: 0.4,
          });
        });
        p.polygon.addListener("mouseout", () => {
          p.polygon.setOptions({
            fillColor: "#D2D2D6",
            fillOpacity: 0.2,
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

      const heatMapObj = new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
      });
      setHeatMap(heatMapObj);
    }
  }, [map, areas]);

  React.useEffect(() => {
    if (!map) return;
    if (showHeatMaps) {
      heatMap?.setMap(map);
    } else {
      heatMap?.setMap(null);
    }
  }, [map, showHeatMaps, heatMap]);

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

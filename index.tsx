import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const App: React.VFC = () => {
  const [zoom, setZoom] = React.useState(12);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 10.8092805, //IBM Building location
    lng: 106.6663751,
  });
  const markers = [
    {
      lat: 10.8118654,
      lng: 106.6665712
    },
    {
      lat: 10.8118726,
      lng: 106.6665749
    },
    {
      lat: 10.8132689,
      lng: 106.6685168
    },
    {
      lat: 10.8126959,
      lng: 106.6689473
    },
    {
      lat: 10.8146242,
      lng: 106.6700285
    },
    {
      lat: 10.814414,
      lng: 106.6697983
    }
  ]

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!} render={render}>
        <Map
          center={center}
          zoom={zoom}
          style={{ flexGrow: "1", height: "100%" }}
        >
          {markers.map((latLng, i) => {
            return <Marker 
            key={i} 
            position={latLng} 
            icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          />})
          }
        </Map>
      </Wrapper>
    </div>
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
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
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
    }
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
      marker.setOptions({
        options,
        ...{
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8.5,
            fillColor: "#F00",
            fillOpacity: 0.4,
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

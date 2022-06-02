import * as React from "react";

export interface MarkerItemInfo {
  office?: string;
  BuildingName?: string;
  Address?: string;
  position?: {
    lat: number;
    lng: number;
  };

  Department?: string;
  Nickname?: string;
  VietnameseName?: string;
  StartDate?: string;
  Seniorty?: string;
  District?: string;
  City?: string;
  NewDistrict?: string;
  Ward?: string;
  Street?: string;
  FullAddress?: string;
}

export interface MarkerOptionsCustom extends google.maps.MarkerOptions {
  id?: number;
  type: "main office" | "sub office" | "in hcm" | "out hcm";
  item?: MarkerItemInfo;
  staffs?: MarkerItemInfo[];
}

const Marker: React.FC<MarkerOptionsCustom> = (options) => {
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
      let infoContent = "";
      if (options.type === "main office") {
        marker.setOptions({ ...options, zIndex: 999 });
        infoContent =
          '<h3 id="firstHeading" class="firstHeading">Aperia</h3>' +
          "<p><b>Address:</b> " +
          "12 Song Thao, Ward 2, Tan Binh District, Ho Chi Minh City, Vietnam" +
          "</p>";
      } else if (options.type === "sub office") {
        marker.setOptions({
          ...options,
          zIndex: 999,
          ...{
            icon: {
              url:
                options.item?.office === "A"
                  ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  : "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
            },
          },
        });
        infoContent =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h3 id="firstHeading" class="firstHeading">' +
          options.item?.BuildingName +
          " - Grade " +
          options.item?.office +
          "</h3>" +
          "<p><b>Address:</b> " +
          options.item?.Address +
          "</p>" +
          "</div>";
      } else if (options.type === "in hcm" || options.type === "out hcm") {
        marker.setOptions({
          ...options,
          cursor: "auto",
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: options.type === "in hcm" ? "#002BFF" : "#F5EF01",
              fillOpacity: 0.8,
              strokeWeight: 0.4,
            },
          },
        });
        if (options.type === "in hcm") {
        } else {
          infoContent =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h3 id="firstHeading" class="firstHeading">' +
            options.item?.Nickname +
            "</h3>" +
            "<p><b>Address:</b> " +
            options.item?.Address +
            "</p>" +
            "</div>";
        }
      }
      // normal office

      if (infoContent) {
        const infowindow = new google.maps.InfoWindow({
          content: infoContent,
          zIndex: 9999,
        });
        marker.addListener("click", function () {
          infowindow.open({
            anchor: marker,
            map: (marker as any).map,
            shouldFocus: false,
          });
        });
      }
    }
  }, [marker, options]);

  return null;
};

export default Marker;

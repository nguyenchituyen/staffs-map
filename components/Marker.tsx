import * as React from "react";

export interface MarkerOptionsCustom extends google.maps.MarkerOptions {
  id?: number;
  areas?: string;
  departments?: string;
  item?: {
    office?: string;
    BuildingName?: string;
    Premises?: string;
    Floor?: string;
    VacantStatus?: string;
    AskingRent?: string;
    ServiceCharge?: string;
    GrossRent?: string;
    TotalAmount?: string;
    Address?: string;
    position?: {
      lat: number;
      lng: number;
    };

    Department?: string;
    Nickname?: string;
    VietnameseName?: string;
    StartDate?: string;
    "24-Apr-2022"?: string;
    Seniorty?: string;
    District?: string;
    City?: string;
    NewDistrict?: string;
    Ward?: string;
    Street?: string;
    FullAddress?: string;
  };
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
      if (options.item && !options.item.office) {
        marker.setOptions({
          options,
          cursor: "auto",
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#002BFF",
              fillOpacity: 0.8,
              strokeWeight: 0.4,
            },
          },
        });
      } else if (options.item && options.item.office) {
        marker.setOptions({
          options,
          zIndex: 90000000000,
          ...{
            icon: {
              url:
                options.item.office === "A"
                  ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  : "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
            },
          },
        });
        console.log("==========", {
          options,
          zIndex: 90000000000,
          ...{
            icon: {
              url:
                options.item.office === "A"
                  ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  : "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
            },
          },
        });
      } else if (options.label) {
        marker.setOptions({
          options,
          cursor: "auto",
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 0,
              fillColor: "#ecedf2",
              fillOpacity: 0,
              strokeWeight: 0,
            },
          },
        });
      } else {
        marker.setOptions(options);
      }

      let infoContent: any;
      if (!options?.item) {
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

      if (options.item && options.item.office) {
        infoContent =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h3 id="firstHeading" class="firstHeading">' +
          options.item.BuildingName +
          " - Grade " +
          options.item.office +
          "</h3>" +
          '<div id="bodyContent">' +
          "<p><b>Premises:</b> " +
          options.item.Premises +
          "</p>" +
          "<p><b>Floor:</b> " +
          options.item.Floor +
          "</p>" +
          "<p><b>Vacant Status:</b> " +
          options.item.VacantStatus +
          "</p>" +
          "<p><b>Asking Rent (VAT excluded):</b> " +
          options.item.AskingRent +
          "</p>" +
          "<p><b>Gross Rent (VAT excluded):</b> " +
          options.item.GrossRent +
          "</p>" +
          "<p><b>Service Charge (VAT excluded):</b> " +
          options.item.ServiceCharge +
          "</p>" +
          "<p><b>Total Amount (VAT excluded):</b> " +
          options.item.TotalAmount +
          "</p>" +
          "<p><b>Address:</b> " +
          options.item.Address +
          "</p>" +
          "</div>" +
          "</div>";
      }

      const infowindow = new google.maps.InfoWindow({
        content: infoContent,
      });
      if (
        infowindow &&
        (!options?.item || (options.item && options.item.office))
      ) {
        marker.addListener("mouseover", function () {
          infowindow.open({
            anchor: marker,
            map: marker.map,
            shouldFocus: false,
          });
        });
        marker.addListener("mouseout", function () {
          infowindow.close();
        });
      }
    }
  }, [marker, options]);

  return null;
};

export default Marker;

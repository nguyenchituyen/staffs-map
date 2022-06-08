import * as React from "react";
import { infoContent as mockInfoContent } from "./mock/inforContent";
import { formatString } from "./util";
export interface MarkerItemInfo {
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
  labelText?: string;
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
  type?: "main office" | "sub office" | "in hcm" | "out hcm";
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
        infoContent = mockInfoContent["main_office"];
      } else if (options.type === "sub office" && options.item) {
        marker.setOptions({
          ...options,
          zIndex: 999,
          ...{
            icon: {
              url:
                options.item?.office === "A"
                  ? "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
                  : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            },
          },
        });

        const {
          BuildingName,
          Premises,
          Floor,
          VacantStatus,
          AskingRent,
          GrossRent,
          ServiceCharge,
          TotalAmount,
          Address,
          Nickname,
          FullAddress,
        } = options.item;
        infoContent = formatString(
          mockInfoContent["office"],
          BuildingName,
          Premises,
          Floor,
          VacantStatus,
          AskingRent,
          GrossRent,
          ServiceCharge,
          TotalAmount,
          Address,
          Nickname,
          FullAddress
        );
      } else if (options.type === "in hcm" || options.type === "out hcm") {
        marker.setOptions({
          ...options,
          cursor: "auto",
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: options.type === "in hcm" ? "#002BFF" : "#28a745",
              fillOpacity: 0.6,
              strokeWeight: 0,
            },
          },
        });
        if (options.type === "in hcm" && options.staffs) {
          infoContent = options.staffs
            .map((staff) => {
              const content = formatString(
                mockInfoContent["employee_group"],
                staff.Nickname,
                staff.FullAddress
              );
              return content;
            })
            .join("");
        } else {
          infoContent = formatString(
            mockInfoContent["employee"],
            options.item?.Nickname,
            options.item?.FullAddress
          );
        }
      } else if (options.label) {
        marker.setOptions({
          ...options,
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
      }

      // normal office

      if (infoContent) {
        const infoWindow = new google.maps.InfoWindow({
          content: infoContent,
          zIndex: 9999,
        });

        const handleHoverMarker = () => {
          infoWindow.open({
            anchor: marker,
            map: (marker as any).map,
            shouldFocus: false,          
          });
        };

        const listenerAddList = marker.addListener("click", handleHoverMarker);

        google.maps.event.addListener(
          (marker as any).map,
          "click",
          function (event) {
            infoWindow.close();
          }
        );

        return () => google.maps.event.removeListener(listenerAddList);
      }
    }
  }, [marker, options]);

  return null;
};

export default Marker;

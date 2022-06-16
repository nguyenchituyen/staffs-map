import * as React from "react";
import { infoContent as mockInfoContent } from "../mock/inforContent";
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
  NickName?: string;
  VietnameseName?: string;
  StartDate?: Date;
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
  employees?: MarkerItemInfo[];
  typeEmployee?: string;
  onClick?: (infoWindow: google.maps.InfoWindow) => void;
  zooms?: number;
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
          zIndex: 99000,
          ...{
            icon: {
              url: '../../images/office.png',
            },
          },
        });

        const {
          BuildingName,
          Premises,
          Floor,
          TotalAmount,
          Address,
        } = options.item;
        infoContent = formatString(
          mockInfoContent["office"],
          BuildingName,
          Premises,
          Floor,
          TotalAmount,
          Address,
        );
      } else if ((options.type === "in hcm" || options.type === "out hcm") && options.zooms) {
        marker.setOptions({
          ...options,
          cursor: "auto",
          ...{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: options.zooms >= 12 ?  8 : 10,
              fillColor:
                options.typeEmployee === "staff" ? "#1671E0" : "#45B027",
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: '#FFFFFF',   
            },
          },
        });

        if (options.type === "in hcm" && options.employees) {
          infoContent = options.employees
            .map((staff) => {
              const content = formatString(
                mockInfoContent["employee_group"],
                staff.NickName,
                staff.Department,
                staff.FullAddress,
              );
              return content;
            })
            .join("");
        } else {
          infoContent = formatString(
            mockInfoContent["employee"],
            options.item?.NickName,
            options.item?.Department,
            options.item?.FullAddress,
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

      if (infoContent) {
        const infoWindow = new google.maps.InfoWindow({
          content: infoContent,
          zIndex: 9999,
        });

        const handleClickMarker = () => {
          infoWindow.open((marker as any).map, marker);
          options.onClick && options.onClick(infoWindow);
        };

        const listenerAddList = marker.addListener("click", handleClickMarker);

        google.maps.event.addListener((marker as any).map, "click", () => {
          infoWindow.close();
        });

        return () => google.maps.event.removeListener(listenerAddList);
      }
    }
  }, [marker, options]);

  return null;
};

export default Marker;

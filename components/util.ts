import { arrPolygonPath } from "./Map";
const hcmCitys = ["Hồ Chí Minh", "Thủ Đức"];

export const inOfHcmStaffsAll = ((arr) => {


    const inOfHcmStaffsObTemp = arr
        .filter((x) => hcmCitys.includes(x.City))
        .reduce((a, b) => {
            a[b.NewDistrict] = [...(a[b.NewDistrict] || []), b];
            return a;
        }, {});

    const arrStaffHCM = Object.keys(inOfHcmStaffsObTemp).map((key) => {
        let center = arrPolygonPath[key].center;
        if (!center.lat) {
            center = calCenter(arrPolygonPath[key].paths);
        }

        return {
            name: key,
            staffs: inOfHcmStaffsObTemp[key],
            position: center,
        };
    });

    return arrStaffHCM;
})

export const outOfHcmStaffsAll = ((arr) => {
    return arr.filter((x) => !hcmCitys.includes(x.City));
})

export function calCenter(paths) {
    const lats = paths.map((x) => x.lat);
    const lngs = paths.map((x) => x.lng);
    return {
        lat: (Math.max(...lats) + Math.min(...lats)) / 2,
        lng: (Math.max(...lngs) + Math.min(...lngs)) / 2,
    };
}
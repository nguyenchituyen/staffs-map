import { arrPolygonPath } from "./Map";
const hcmCitys = ["Hồ Chí Minh", "Thủ Đức"];

export const inHcmAllGroup = ((arr) => {
    const inOfHcmObTemp = arr
        .filter((x) => hcmCitys.includes(x.City))
        .reduce((a, b) => {
            a[b.NewDistrict] = [...(a[b.NewDistrict] || []), b];
            return a;
        }, {});

    const arrHCM = Object.keys(inOfHcmObTemp).map((key) => {
        let center = arrPolygonPath[key].center;
        if (!center.lat) {
            center = calCenter(arrPolygonPath[key].paths);
        }

        return {
            name: key,
            staffs: inOfHcmObTemp[key],
            position: center,
        };
    });

    return arrHCM;
})

export const inHcmAll = ((arr) => {
    return arr.filter((x) => hcmCitys.includes(x.City));
})

export const outHcmAll = ((arr) => {
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
import { arrPolygonPath, arrWardPath } from "../data/constant";
const hcmCitys = ["Hồ Chí Minh", "Thủ Đức"];

export const areaDatas = [
'DISTRICT 1','DISTRICT 2','DISTRICT 3','DISTRICT 4','DISTRICT 5','DISTRICT 6','DISTRICT 7','DISTRICT 8','DISTRICT 9','DISTRICT 10',   
   'DISTRICT 11','DISTRICT 12','BINH CHANH','BINH TAN','BINH THANH','CAN GIO','CU CHI','GO VAP','HOC MON','PHU NHUAN','TAN BINH','TAN PHU','THU DUC','NHA BE'];

export const addSeniorty = (arr) => {
  const nowDate = Date.now();

  const newSeniorty = arr.map((obj) => {
    const startDate = obj.StartDate ? convertDate(obj.StartDate) : new Date();
    return {
      ...obj,
      StartDate: startDate,
      Seniorty: (
 (nowDate - startDate.getTime()) /
 1000 /
 60 /
 60 /
 24 /
 365
      ).toFixed(2),
    };
  });

  return newSeniorty;
};

export const inHcmWard = (arr) => {
  
  const arrWard = areaDatas.map(ward => (
    arr.filter(e => e.NewDistrict === ward).reduce((prev, current) => 
    {
        return {
     ...prev,
     [current.Ward]: prev[current.Ward] ? [...prev[current.Ward], current] : [current]
        }
    }, {})
  ));

  const newArrWard = Object.keys(arrWard).map((key) => {
    let center = arrWardPath[key]?.center;

    return {
      name: arrWardPath[key],
      employees: arrWard[key],
      position: center,
    };
  });

  return newArrWard;
};

export const inHcmAllGroup = (arr) => {
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
      employees: inOfHcmObTemp[key],
      position: center,
    };
  });

  return arrHCM;
};

export const inHcmAll = (arr) => {
  return arr.filter((x) => hcmCitys.includes(x.City));
};

export const outHcmAll = (arr) => {
  return arr.filter((x) => !hcmCitys.includes(x.City));
};

export const calCenter = (paths) => {
  const lats = paths.map((x) => x.lat);
  const lngs = paths.map((x) => x.lng);
  return {
    lat: (Math.max(...lats) + Math.min(...lats)) / 2,
    lng: (Math.max(...lngs) + Math.min(...lngs)) / 2,
  };
};

export const formatString = (strContent: string, ...param) => {
  let ret = strContent;
  param.forEach((val, index) => {
    ret = ret.replace(`{${index}}`, val);
  });

  return ret;
};

const MONTH_STR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const convertDate = (str: string) => {
  try {
    const [date, monthText, year] = str.split("-");
    const month = MONTH_STR.findIndex((e) => e === monthText);
    return new Date(+year, month, +date);
  } catch (error) {
      return new Date();
  }
};

import * as district from "../data";

export const arrPolygonPath = {
    "DISTRICT 1": {
      paths: district.hcm_d_1,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 2": {
      paths: district.hcm_d_2,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 3": {
      paths: district.hcm_d_3,
      center: {
        lat: 10.7843695,
        lng: 106.6844089,
      },
    },
    "DISTRICT 4": {
      paths: district.hcm_d_4,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 5": {
      paths: district.hcm_d_5,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 6": {
      paths: district.hcm_d_6,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 7": {
      paths: district.hcm_d_7,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 8": {
      paths: district.hcm_d_8,
      center: {
        lat: 10.7285473,
        lng: 106.6364885,
      },
    },
    "DISTRICT 9": {
      paths: district.hcm_d_9,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 10": {
      paths: district.hcm_d_10,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 11": {
      paths: district.hcm_d_11,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "DISTRICT 12": {
      paths: district.hcm_d_12,
      center: {
        lat: 10.8771531,
        lng: 106.6713322,
      },
    },
    "BINH CHANH": {
      paths: district.hcm_d_binhchanh,
      center: {
        lat: 10.7436552,
        lng: 106.5222933,
      },
    },
    "BINH TAN": {
      paths: district.hcm_d_binhtan,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "BINH THANH": {
      paths: district.hcm_d_binhthanh,
      center: {
        lat: 10.8105831,
        lng: 106.7091422,
      },
    },
    "CAN GIO": {
      paths: district.hcm_d_cangio,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "CU CHI": {
      paths: district.hcm_d_cuchi,
      center: {
        lat: 10.992192,
        lng: 106.5265434,
      },
    },
    "GO VAP": {
      paths: district.hcm_d_govap,
      center: {
        lat: 10.8446779,
        lng: 106.6652904,
      },
    },
    "HOC MON": {
      paths: district.hcm_d_hoocmon,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "PHU NHUAN": {
      paths: district.hcm_d_phunhuan,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "TAN BINH": {
      paths: district.hcm_d_tanbinh,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "TAN PHU": {
      paths: district.hcm_d_tanphu,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "THU DUC": {
      paths: district.hcm_d_thuduc,
      center: {
        lat: 0,
        lng: 0,
      },
    },
    "NHA BE": {
      paths: district.hcm_d_nhabe,
      center: {
        lat: 0,
        lng: 0,
      },
    },
  };
  
export const styleMap = [
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#878787"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f3f3f3"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#aee0f4"
            }
        ]
    }
  ];

export  const marksSeniorty = [
    {
      value: 0,
      label: "0 year",
    },
    {
      value: 15,
      label: "15 years",
    },
  ];


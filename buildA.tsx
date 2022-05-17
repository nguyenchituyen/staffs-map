const buildA = [
  {
      "office": 'A',
        "BuildingName": "Vincom Center Tower",
        "Premises": "4175.7 m2",
        "Floor": "4-5-14",
        "VacantStatus": "Now",
        "AskingRent": "30.48 usd/m2",
        "ServiceCharge": "5 usd/m2",
        "GrossRent": "30.03 usd/m2",
        "TotalAmount": "162969 usd",
        "Address": "72 Le Thanh Ton street, Ben Nghe ward, District 1",
        "position": {
          "lat": 10.777997, 
          "lng": 106.702067
        },
    },
    {
      "office": 'A',
        "BuildingName": "Centre Point Tower",
        "Premises": "1186.4 m2",
        "Floor": "11",
        "VacantStatus": "Now",
        "AskingRent": "25.69 usd/m2",
        "ServiceCharge": "6.22 usd/m2",
        "GrossRent": "35.1 usd/m2",
        "TotalAmount": "41643.8 usd",
        "Address": "106 Nguyen Van Troi, Ward 8, Phu Nhuan District",
        "position": {
          "lat": 10.7973397, 
          "lng": 106.6733663
        },
    },
  // {
  //   "office": 'A',
  //     "BuildingName": "LIM 3 Tower",
  //     "Premises": "1200 m2",
  //     "Floor": "26",
  //     "VacantStatus": "Now",
  //     "AskingRent": "45 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "56.1 usd",
  //     "TotalAmount": "67320 usd",
  //     "Address": "29A Nguyen Dinh Chieu street, Da Kao ward, District 1",
  //     "position": {
  //       "lat": 10.787110,
  //       "lng": 106.698530
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "LIM 3 Tower",
  //     "Premises": "800 m2",
  //     "Floor": "26",
  //     "VacantStatus": "Now",
  //     "AskingRent": "45 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "56.1 usd",
  //     "TotalAmount": "44880 usd",
  //     "Address": "29A Nguyen Dinh Chieu street, Da Kao ward, District 1",
  //     "position": {
  //       "lat": 10.787110,
  //       "lng": 106.698530
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Vincom Center Tower ",
  //     "Premises": "799.2 m2",
  //     "Floor": "8",
  //     "VacantStatus": "Now",
  //     "AskingRent": "30 usd",
  //     "ServiceCharge": "5 usd",
  //     "GrossRent": "38.5 usd",
  //     "TotalAmount": "30769.2 usd",
  //     "Address": "72 Le Thanh Ton street, Ben Nghe ward, District 1",
  //     "position": {
  //       "lat": 10.779710, 
  //       "lng": 106.705720
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Vincom Center Tower",
  //     "Premises": "915.9 m2",
  //     "Floor": "14",
  //     "VacantStatus": "Now",
  //     "AskingRent": "31 usd",
  //     "ServiceCharge": "5 usd",
  //     "GrossRent": "39.6 usd",
  //     "TotalAmount": "36269.6 usd",
  //     "Address": "72 Le Thanh Ton street, Ben Nghe ward, District 1",
  //     "position": {
  //       "lat": 10.779710, 
  //       "lng": 106.705720
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Vietcombank Tower",
  //     "Premises": "1170 m2",
  //     "Floor": "15",
  //     "VacantStatus": "Now",
  //     "AskingRent": "50 usd",
  //     "ServiceCharge": "7 usd",
  //     "GrossRent": "62.7 usd",
  //     "TotalAmount": "73359 usd",
  //     "Address": "5 Cong Truong Me Linh street, Ben Nghe ward, District 1",
  //     "position": {
  //       "lat": 10.775690,
  //       "lng": 106.705520
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "The Metropolitan Building",
  //     "Premises": "803 m2",
  //     "Floor": "2",
  //     "VacantStatus": "Now",
  //     "AskingRent": "38 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "48.4 usd",
  //     "TotalAmount": "38865.2 usd",
  //     "Address": "235 Dong Khoi, Ben Nghe ward, District 1",
  //     "position": {
  //       "lat": 10.778490,
  //       "lng": 106.700000
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Khanh Nguyen Building ",
  //     "Premises": "1012 m2",
  //     "Floor": "5-6",
  //     "VacantStatus": "Now",
  //     "AskingRent": "26 usd",
  //     "ServiceCharge": "3.5 usd",
  //     "GrossRent": "32.45 usd",
  //     "TotalAmount": "32839.4 usd",
  //     "Address": "87A Ham Nghi, Nguyen Thai Binh Ward, District 1",
  //     "position": {
  //       "lat": 10.770729990103618,
  //       "lng": 106.7021300022966
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "TNR Tower",
  //     "Premises": "970 m2",
  //     "Floor": "13",
  //     "VacantStatus": "Now",
  //     "AskingRent": "26 usd",
  //     "ServiceCharge": "5 usd",
  //     "GrossRent": "34.1 usd",
  //     "TotalAmount": "33077 usd",
  //     "Address": "192 Nguyen Cong Tru street, Nguyen Thai Binh ward, District 1",
  //     "position": {
  //       "lat": 0.768379997819835,
  //       "lng": 106.70098997964573
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "President Place",
  //     "Premises": "774 m2",
  //     "Floor": "4",
  //     "VacantStatus": "Now",
  //     "AskingRent": "40 usd",
  //     "ServiceCharge": "7 usd",
  //     "GrossRent": "51.7 usd",
  //     "TotalAmount": "40015.8 usd",
  //     "Address": "93 Nguyen Du, Ben Nghe Ward, District 1",
  //     "position": {
  //       "lat": 10.776834115719751,
  //       "lng": 106.69807247555666
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Central Plaza",
  //     "Premises": "756 m2",
  //     "Floor": "7-9",
  //     "VacantStatus": "Now",
  //     "AskingRent": "37 usd",
  //     "ServiceCharge": "7 usd",
  //     "GrossRent": "48.4 usd",
  //     "TotalAmount": "36590.4 usd",
  //     "Address": "17 Le Duan street, Ben Nghe ward, District 1",
  //     "position": {
  //       "lat": 10.784740005985242,
  //       "lng": 106.70268999724772
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "MB Sunny Tower",
  //     "Premises": "864.7 m2",
  //     "Floor": "10-11",
  //     "VacantStatus": "Now",
  //     "AskingRent": "24 usd",
  //     "ServiceCharge": "5.5 usd",
  //     "GrossRent": "32.45 usd",
  //     "TotalAmount": "28059.5 usd",
  //     "Address": "259 Tran Hung Dao street, Co Giang ward,District 1",
  //     "position": {
  //       "lat": 10.763880005462042,
  //       "lng": 106.69217003821029
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Pearl 5 Office Tower",
  //     "Premises": "804 m2",
  //     "Floor": "12",
  //     "VacantStatus": "Now",
  //     "AskingRent": "38.05 usd",
  //     "ServiceCharge": "6.5 usd",
  //     "GrossRent": "49 usd",
  //     "TotalAmount": "39400 usd",
  //     "Address": "05 Le Quy Don, Ward 6, District 3",
  //     "position": {
  //       "lat": 10.779420012039793,
  //       "lng": 106.69278996376914
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Pearl 5 Office Tower",
  //     "Premises": "1020 m2",
  //     "Floor": "12-13",
  //     "VacantStatus": "Now",
  //     "AskingRent": "38.05 usd",
  //     "ServiceCharge": "6.5 usd",
  //     "GrossRent": "49 usd",
  //     "TotalAmount": "49985.1 usd",
  //     "Address": "05 Le Quy Don, Ward 6, District 3",
  //     "position": {
  //       "lat": 10.779420012039793,
  //       "lng": 106.69278996376914
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "LIM 2 Tower",
  //     "Premises": "1074 m2",
  //     "Floor": "12A-14-15",
  //     "VacantStatus": "Now",
  //     "AskingRent": "27 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "36.3 usd",
  //     "TotalAmount": "38986.2 usd",
  //     "Address": "158 Vo Van Tan street, Ward 6 , District 3",
  //     "position": {
  //       "lat": 10.774799990828527,
  //       "lng": 106.6885099963697
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "LIM 2 Tower",
  //     "Premises": "820 m2",
  //     "Floor": "12A-15",
  //     "VacantStatus": "Now",
  //     "AskingRent": "27 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "36.3 usd",
  //     "TotalAmount": "29766 usd",
  //     "Address": "158 Vo Van Tan street, Ward 6 , District 3",
  //     "position": {
  //       "lat": 10.774799990828527,
  //       "lng": 106.6885099963697
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Alpha Tower",
  //     "Premises": "1126 m2",
  //     "Floor": "4-5",
  //     "VacantStatus": "15-5-2022",
  //     "AskingRent": "28 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "37.4 usd",
  //     "TotalAmount": "42112.4 usd",
  //     "Address": "151-153 Nguyen Dinh Chieu street, Ward 6, District 3",
  //     "position": {
  //       "lat": 10.775970020692782,
  //       "lng": 106.68785000531369
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Viettel Complex (Tower A)",
  //     "Premises": "973 m2",
  //     "Floor": "12-23",
  //     "VacantStatus": "09/2022",
  //     "AskingRent": "26 usd",
  //     "ServiceCharge": "5.5 usd",
  //     "GrossRent": "34.65 usd",
  //     "TotalAmount": "33714.4 usd",
  //     "Address": "285 Cach Mang Thang Tam, Ward 12, District 10",
  //     "position": {
  //       "lat": 10.778719997396095,
  //       "lng": 106.67964998943717
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Centre Point Tower",
  //     "Premises": "1130 m2",
  //     "Floor": "3-8",
  //     "VacantStatus": "Now",
  //     "AskingRent": "25.69 usd",
  //     "ServiceCharge": "6.22 usd",
  //     "GrossRent": "35.1 usd",
  //     "TotalAmount": "39664.1 usd",
  //     "Address": "106 Nguyen Van Troi, Ward 8, Phu Nhuan District",
  //     "position": {
  //       "lat": 10.798988754950358,
  //       "lng": 106.66989051156516
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Betrimex Building",
  //     "Premises": "804 m2",
  //     "Floor": "1-2-4",
  //     "VacantStatus": "Now",
  //     "AskingRent": "20.86 usd",
  //     "ServiceCharge": "3.7 usd",
  //     "GrossRent": "27.02 usd",
  //     "TotalAmount": "21720.9 usd",
  //     "Address": "62 Tran Huy Lieu, Ward 12, Phu Nhuan District",
  //     "position": {
  //       "lat": 10.793409995172823,
  //       "lng": 106.67800001179705
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "AP Tower",
  //     "Premises": "994.8 m2",
  //     "Floor": "17-18",
  //     "VacantStatus": "Now",
  //     "AskingRent": "23 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "31.9 usd",
  //     "TotalAmount": "31734.1 usd",
  //     "Address": "518B Dien Bien Phu street, Ward 21, Binh Thanh District",
  //     "position": {
  //       "lat": 10.800717799902673,
  //       "lng": 106.7148244190829
  //     },
  // },
  // {
  //   "office": 'A',
  //     "BuildingName": "Pearl Plaza",
  //     "Premises": "1000 m2",
  //     "Floor": "4",
  //     "VacantStatus": "Now",
  //     "AskingRent": "24 usd",
  //     "ServiceCharge": "6 usd",
  //     "GrossRent": "33 usd",
  //     "TotalAmount": "33000 usd",
  //     "Address": "561A Dien Bien Phu street, Ward 25, Binh Thanh District",
  //     "position": {
  //       "lat": 10.80072103739143,
  //       "lng": 106.71595292874878
  //     },
  // }
];

export default buildA;
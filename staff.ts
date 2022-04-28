
const staffs = [
    {
        "Department": "Director",
        "Nickname": "Khoa Nguyen",
        "VietnameseName": "Nguyễn Ngọc Khoa",
        "address": "Hẻm 33, đường số 8 , Phường 11, Q. GòVấp. Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Truc Phan",
        "VietnameseName": "Phan Thị Diệp Trúc ",
        "address": "415/44 Tân Hương, Phường Tân Quý, Quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Hai Le",
        "VietnameseName": "Lê Văn Hải ",
        "address": "Căn hộ A10.05, Chung cư 26 Nguyễn Thượng Hiền, Phường 1, Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Finance",
        "Nickname": "Tho Tran ",
        "VietnameseName": "Trần Ái Thơ",
        "address": "63 đường T5, phường Tây Thạnh, quận Tân Phú, Tp.Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Ngoc Pham",
        "VietnameseName": "Phạm Thị Thu Ngọc",
        "address": "B02.09 Opal Riverside, đường số 10, Phường Hiệp Bình Chánh, Quận Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Graphic Designer",
        "Nickname": "Lan Nguyen",
        "VietnameseName": "Nguyễn Xuân Ngọc Lan",
        "address": "10F2 Nguyễn Thị Minh Khai, phường Đa Kao, quận 1, tp.Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Oai Ngo",
        "VietnameseName": "Ngô Quốc Oai",
        "address": "230/18/24 Trường Chinh, phường 13, quận Tân Bình,Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Giang Nguyen",
        "VietnameseName": "Nguyễn Trường Giang",
        "address": "90/62, Đỗ Thừa Luông, Tân Quý, Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tung Le",
        "VietnameseName": "Lê Văn Thanh Tùng",
        "address": "chung cư 8xplus 163a Trường Chinh, Tân Thới Nhất, Quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Thi Nguyen",
        "VietnameseName": "Nguyễn Kiến Thi",
        "address": "362/34/4 HT13, P.Hiệp Thành, Q12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Trinh Tran",
        "VietnameseName": "Trần Thuỵ Mai Trinh",
        "address": "A2.307 CC Green Town, đường số 1, P.Bình Hưng Hòa B, Q.Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Van Nguyen ",
        "VietnameseName": "Nguyễn Thị Cẩm Vân",
        "address": "313 khu 3, ấp Phước Toàn, xã Long Hiệp, huyện Bến Lức, tỉnh Long An"
    },
    {
        "Department": "DB",
        "Nickname": "Cuong Nguyen",
        "VietnameseName": "Nguyễn Việt Cường",
        "address": "237/32/37 Hòa Binh, P Hiệp Tân, Q Tân Phú, Tp. Hồ Chí Minh "
    },
    {
        "Department": "DB",
        "Nickname": "Tuan Pham",
        "VietnameseName": "Phạm Viết Tuấn",
        "address": "Phường 11, quận Bình Thạnh, Tp.Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Oanh Nguyen",
        "VietnameseName": "Nguyễn Vũ Hoàng Oanh",
        "address": "Block D, CC Emerald, Số 2, Đường N4, phường Sơn Kỳ, quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Son Nguyen ",
        "VietnameseName": "Nguyễn Ngọc Sơn",
        "address": "B504 cc Sunview Town, đường Gò Dưa, phường Hiệp Bình Phước, Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thiet Ngo",
        "VietnameseName": "Ngô Văn Thiệt",
        "address": "63/2/6 đường 2, tổ 6, KP4, P. Tăng Nhơn Phú B, TP. Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nhat Nguyen",
        "VietnameseName": "Nguyễn Vũ Minh Nhật",
        "address": "256/126/29A Phan Huy Ích, P.12, Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Phuong Nguyen ",
        "VietnameseName": "Nguyễn Thị Thu Phương",
        "address": "610 Nguyễn Chí Thanh, P7, Q11, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Huyen Dao",
        "VietnameseName": "Đào Thu Huyền",
        "address": "41F/46 đường Trục, phường 3, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Trinh Luong ",
        "VietnameseName": "Lương Thị Ngọc Trinh",
        "address": "17.1 B3 Chung cư Terra Rosa - 13E Nguyễn Văn Linh, Phong Phú, Bình Chánh, TPHCM"
    },
    {
        "Department": "IS",
        "Nickname": "Quoc Le",
        "VietnameseName": "Lê Hồng Quốc",
        "address": "383/2/112 Quang Trung, Phuong 10, Go Vap Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Tan Tran",
        "VietnameseName": "Trần Hữu Tấn",
        "address": "56/13 KP2 đường TX25, phường Thạnh Xuân, quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Ly Nguyen",
        "VietnameseName": "Nguyễn Thị Thiên Lý",
        "address": "193 Phạm Văn Hai, phường 5, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PM",
        "Nickname": "Mai Tran",
        "VietnameseName": "Trần Thị Tuyết Mai",
        "address": "8/20 B1 Nguyen Thien Thuat, P24, Binh Thanh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Anh Le",
        "VietnameseName": "Lê Thúc Quốc Anh",
        "address": "124/10 Võ Văn Hát - Phường Long Trường - TP. Thủ Đức (Q9) - Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Dung Pham ",
        "VietnameseName": "Phạm Thị Dung",
        "address": "479/44/3/12 To 27, KP3, Tan Thoi Hiep, Q12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "HR",
        "Nickname": "Que Anh",
        "VietnameseName": "Nguyễn Thị Quế Anh",
        "address": "Grand Riverside, 283 Bến Vân Đồn, phường 2 quận 4, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Quan Phan",
        "VietnameseName": "Phan Văn Quân",
        "address": "19/18. đường số 4, KP17, Bình Hưng hòa A, Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Ngoc Ta",
        "VietnameseName": "Tạ Quang Như Ngọc",
        "address": "Chung cư Gia Hòa, 523A Đỗ Xuân Hợp, P. Phước Long B, Quận 9, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Tuan Dang",
        "VietnameseName": "Đặng Hoàng Tuấn",
        "address": "188 Nguyễn Xí, p26, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "An Nguyen",
        "VietnameseName": "Nguyễn Thanh An",
        "address": "BT11 đường số 9, An Bình, Dĩ An, Bình Dương"
    },
    {
        "Department": "BA",
        "Nickname": "Khanh Pham ",
        "VietnameseName": "Phạm Võ Tường Khanh",
        "address": "52/52/8 Nguyễn Sỹ Sách, phường 15, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Quang Dinh",
        "VietnameseName": "Đinh Viết Quảng",
        "address": "Phòng B206 chung cư An Bình, đường Lê Trọng Tấn, Phường An Bình, TP. Dĩ An, Tỉnh Bình Dương"
    },
    {
        "Department": "QC",
        "Nickname": "Quyen Huynh",
        "VietnameseName": "Huỳnh Vân Quyên",
        "address": "258/28 Phạm Văn Bạch, phường 15, quận Tân Bình, Tp.Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Phong Pham",
        "VietnameseName": "Phạm Phú Phong",
        "address": "Căn hộ B5-09 Chung cư moonlight 102 đặng văn bi thành phố thủ đức thành phố Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Thao Pham",
        "VietnameseName": "Phạm Thị Thu Thảo",
        "address": "D8.17 chung cư Emerald, số 2 đường N4, Phường Sơn Kỳ, Quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Tam Tran",
        "VietnameseName": "Trần Thị Thanh Tâm",
        "address": "2/4/31/41 Lê Thúc Hoạch, phường Phú Thọ Hòa, quận Tân Phú. Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Cuong Phan",
        "VietnameseName": "Phan Hữu Huy Cường",
        "address": "AK6 010.17 Chung cư Akari 77 Võ Văn Kiệt, phường An Lạc, quận Bình Tân, Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Huy Dong",
        "VietnameseName": "Đồng Vĩnh Huy",
        "address": "Số 15, đường 13, khu phố Giãn Dân, phường Long Bình, TP Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Phuong Cao",
        "VietnameseName": "Cao Lưu Thanh Phương",
        "address": "số 1/1 Cù Chính Lan, Phường 13 quận Tân Bình, TPTp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Uyen Le",
        "VietnameseName": "Lê Thị Thục Uyên",
        "address": "Tổ 6B, kp Đông Thành, Tân Đông Hiệp, dĩ an, Bình Dương"
    },
    {
        "Department": "IS",
        "Nickname": "Vinh Tran",
        "VietnameseName": "Trần Đình Vinh",
        "address": "54 KP3A, đường ĐHT26, phường Đông Hưng Thuận, Quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Dung Duc",
        "VietnameseName": "Nguyễn Đức Dũng",
        "address": "159/1/2 Bạch Đằng, phường 2, Tân Bình, TPTp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Su Phan",
        "VietnameseName": "Phan Quốc Sử",
        "address": "Block A1-809, Chung cư ehome 3, Hồ Học Lãm, An Lạc, Bình Tân, Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Ly Pham",
        "VietnameseName": "Phạm Thị Trúc Ly",
        "address": "183/3, nguyễn văn đậu, p.11, quận Bình thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Minh Vo",
        "VietnameseName": "Võ Duy Minh",
        "address": "263/19 Xóm Chiếu, p15, Q4, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Anh Tran",
        "VietnameseName": "Trần Hoàng Anh",
        "address": "23M Đường số 25, P. Bình Hưng Hòa A, Q. Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phi Vo",
        "VietnameseName": "Võ Hồng Phi",
        "address": "phường 8, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Mien Nguyen",
        "VietnameseName": "Nguyễn Thị Miền",
        "address": "cc Phu' Gia xã Phú Xuân, nhà bè, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Quang Le",
        "VietnameseName": "Nguyễn Lê Duy Quang",
        "address": "2050 Phạm Thế Hiển, phường 6, quận 8, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Chi Nguyen",
        "VietnameseName": "Nguyễn Thị Linh Chi",
        "address": "chung cư Vinhomes Central Park , 208 Nguyễn Hữu Cảnh, p22, qBT"
    },
    {
        "Department": "DB",
        "Nickname": "Dung Diep",
        "VietnameseName": "Diệp Mỹ Dung",
        "address": "168/16/10 Trần Văn Quang, Phường 10, Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thang Dinh",
        "VietnameseName": "Đinh Công Thắng",
        "address": "10 Chữ Đồng Tử, phường 7, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Lai Nguyen",
        "VietnameseName": "Nguyễn Thanh Lai",
        "address": "719 Lạc Long Quân, Phường 10, Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Son Vuong",
        "VietnameseName": "Vương Kim Sơn",
        "address": "39 Đông Hưng Thuận 32, KP 2, phường Tân Hưng Thuận, Quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Dat Van",
        "VietnameseName": "Văn Nguyễn Tiến Đạt",
        "address": "26/6/19 Đường 13A, phường Bình Hưng Hoà A, quận Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Duc Tran",
        "VietnameseName": "Trần Hồ Hữu Đức",
        "address": "84/28 Nguyễn Văn Nghi, phường 5, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IT",
        "Nickname": "Tai Nguyen",
        "VietnameseName": "Nguyễn Văn Tài",
        "address": "1/80, khu phố 7, Quang Trung, thị trấn Hóc Môn, huyện Hóc Môn, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IT",
        "Nickname": "Hai Lieu",
        "VietnameseName": "Liêu Ngọc Hải",
        "address": "524 khu phố Hung Lộc, phường Hưng Định, thị xã Thuận An, tỉnh Bình Dương"
    },
    {
        "Department": "QC",
        "Nickname": "Duy Nguyen",
        "VietnameseName": "Nguyễn Bảo Duy",
        "address": "482/51/10 Lê Quang Định, phường 11, quận Bình Thạnh, Tp.Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Van Thuy",
        "VietnameseName": "Nguyễn Thị Thuỳ Vân",
        "address": "74/2 Trần Khắc Chân, phường 15, quận Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Dao Doan",
        "VietnameseName": "Đoàn Hồng Đào",
        "address": "179/1B ấp Tân Thới 3, xã Tân Hiệp, huyện Hóc Môn, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Truong Truong",
        "VietnameseName": "Trương Nguyễn Đăng Trường",
        "address": "68/15 Hồ Thị Kỷ, phường 1, quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tri Ly",
        "VietnameseName": "Lý Minh Trí",
        "address": "Số 12 Khu phố 6, đường 48, quận Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Cao Nguyen",
        "VietnameseName": "Nguyễn Cao Nguyên",
        "address": "439/46/06 Đường số 10, phường 8, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Duc Hoang",
        "VietnameseName": "Hoàng Tuấn Đức",
        "address": "Đường 39, khu phố Hoà Long, phường Vĩnh Phú , Tx. Thuận An, Bình Dương"
    },
    {
        "Department": "IS",
        "Nickname": "Bang Le",
        "VietnameseName": "Lê Công Bằng",
        "address": "149/42 Đất Thánh, Phường 6, Quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Uyen Ta",
        "VietnameseName": "Tạ Ngọc Phương Uyên",
        "address": "392/1/3 Cao Thắng nối dài, quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Quoc Phan",
        "VietnameseName": "Phan Thanh Quốc",
        "address": "Số 20 đường A4, phường 12, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Nhi Nguyen",
        "VietnameseName": "Nguyễn Thị Yến Nhi",
        "address": "61/3B, Tổ 2, khu phố 2, Thị trấn Hóc Môn, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Anh Huynh",
        "VietnameseName": "Huỳnh Minh Ánh",
        "address": "207/52/28 Nguyễn Văn Đậu, phường 11, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Man Pham",
        "VietnameseName": "Phạm Viết Mẫn",
        "address": "24A Phan Văn Sửu P13 Quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Duy Ngoc",
        "VietnameseName": "Nguyễn Thị Ngọc Duy",
        "address": "75/34 đường 48 (nhánh 3) ,phường Hiệp Bình Chánh , Quận Thủ Đức , TpTp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Tam Le",
        "VietnameseName": "Lê Châu Việt Minh Tâm",
        "address": "217/17/6 Nơ Trang Long, phường 12, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Chau Ho",
        "VietnameseName": "Hồ Thái Minh Châu",
        "address": "230/9 Tùng Thiện Vương, phường 11, quận 8, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Linh Hoang",
        "VietnameseName": "Hoàng Thị Diệu Linh",
        "address": "CC Flora Fuji, Đường F1, Phước Long B, TP.Thủ Đức"
    },
    {
        "Department": "Design",
        "Nickname": "Oanh Le",
        "VietnameseName": "Lê Yến Oanh",
        "address": "10.08 D2, Chung cư Mỹ Đức, 220 XVNT, P21, Bình Thạnh"
    },
    {
        "Department": "Design",
        "Nickname": "Quang Nguyen",
        "VietnameseName": "Nguyễn Duy Quang",
        "address": "chung cư 1050 - 4 Phan Chu Trinh P.12 Q. Binh Thanh"
    },
    {
        "Department": "DB",
        "Nickname": "Lan Hoang",
        "VietnameseName": "Nguyễn Hoàng Lân",
        "address": "965A Huỳnh Tấn Phát, phường Phú Thuận, quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Hai Nguyen",
        "VietnameseName": "Nguyễn Thanh Hải",
        "address": "33 Kinh Dương Vương, phường 12, quận 6, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nam Tran",
        "VietnameseName": "Trần Quang Phương Nam",
        "address": "52A, Trần Văn Quang, phường 10, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hai O",
        "VietnameseName": "Ô Tuấn Hải",
        "address": "30 Bạch Đằng, phường 2, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Tu Phan",
        "VietnameseName": "Phan Huỳnh Tú",
        "address": "755 Quang Trung, phường 12, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thanh Nguyen",
        "VietnameseName": "Nguyễn Tiến Thành",
        "address": "380/37/8, Phạm Văn Chiêu, phường 9, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Front - end",
        "Nickname": "PhiLip Dang",
        "VietnameseName": "Đặng Thị Phi Líp",
        "address": "44/6A, đường số 6, phương Linh Tây, quận Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Anh Dang",
        "VietnameseName": "Đặng Nhật Anh",
        "address": "37/7/ Ngô Bệ , quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Yen Ka",
        "VietnameseName": "Ka Phu Thị Yến",
        "address": "56 Nguyến Bá Tuyển, phường 12, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Thien Le",
        "VietnameseName": "Lê Minh Thiện",
        "address": "33 Phan Tây Hồ, phường 7, quận Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Admin",
        "Nickname": "Le Nhan",
        "VietnameseName": "Lê Nhàn",
        "address": "đường số 8, phường Trường Thọ, thành phố Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DBA",
        "Nickname": "Chien Tran",
        "VietnameseName": "Trần Quang Chiến",
        "address": "343/33A Trần Thủ Độ, phường Phú Thạnh, quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Binh Ha",
        "VietnameseName": "Hà Thanh Bình",
        "address": "34/17 Đình Nghi Xuân, phường Bình Trị Đông, quận Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Thang Vo",
        "VietnameseName": "Võ Minh Thắng",
        "address": "377 Tân Hương, phường Tân Quý, quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thao Le",
        "VietnameseName": "Nguyễn Lê Phương Thảo",
        "address": "86/88 Ông Ích Khiêm F14 Q11, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nha Le",
        "VietnameseName": "Lê Tấn Nha",
        "address": "32 đường số 5, Hiệp Bình Phước, quận Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Front - end",
        "Nickname": "Hien Ngo",
        "VietnameseName": "Ngô Xuân Hiển",
        "address": "31/8 đường số 8, Phường 11 , Q. Gò vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Ngoc Dang",
        "VietnameseName": "Đặng Thị Bích Ngọc",
        "address": "566/137/37 Nguyễn Thái Sơn, phường 5, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Admin",
        "Nickname": "An Pham",
        "VietnameseName": "Nguyễn Phạm Thiên Ân",
        "address": "453KA/82B Lê Văn Sỹ, phường 11, quận Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Vinh Phan",
        "VietnameseName": "Phan Thế Vinh",
        "address": "87 Hùng Vương, phường 4, quận 5, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Trang Vo",
        "VietnameseName": "Võ Thị Như Trang",
        "address": "A02.12 Botanica Premier, 104 Hồng Hà, phường 2, quận Tân Bình"
    },
    {
        "Department": "IS",
        "Nickname": "Vong Nguyen",
        "VietnameseName": "Nguyễn Thanh Vọng",
        "address": "28/3/5 đường Tam Bình, Phường HIệp BÌnh Chánh, Quận Thủ Đức, TP.THủ Đức"
    },
    {
        "Department": "BA",
        "Nickname": "Bao Le",
        "VietnameseName": "Lê Gia Bảo",
        "address": "76 Nguyễn Phi Khanh, phường Tân Định, quận 1, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tai Vu",
        "VietnameseName": "Vũ Như Tài",
        "address": "Số 205, Thoại Ngọc Hầu, Quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phat Phan",
        "VietnameseName": "Nguyễn Phan Hòa Phát",
        "address": "872/51/12 Quang Trung, phường 8, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Pin Nguyen",
        "VietnameseName": "Nguyễn Thành Pin",
        "address": "12/33 Nguyễn Tuân, phường 3, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Anh Hoang",
        "VietnameseName": "Hoàng Hương Anh",
        "address": "528/5/58 Điện Biên Phủ, phường 11, quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Trang Tran",
        "VietnameseName": "Trần Đài Trang",
        "address": "28 Đường số 2, phường Phước Long B, quận 9, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PM",
        "Nickname": "Nhan Dinh",
        "VietnameseName": "Đinh Thành Nhân",
        "address": "22/14 Phan Văn Đốn, Tân Thới Nhất, quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "HR",
        "Nickname": "Duyen Doan",
        "VietnameseName": "Đoàn Thị Mỹ Duyên",
        "address": "87/54/12 Quốc lộ 1, phường Hiệp Bình Phước, quận Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Huy Vo",
        "VietnameseName": "Võ Thuận Minh Huy",
        "address": "21/24 Trường Sơn, phường 4, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IT",
        "Nickname": "Khoa Tran",
        "VietnameseName": "Trần Đặng Anh Khoa",
        "address": "9/17A Đoàn Thị Điểm, p1, Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Ninh Nguyen",
        "VietnameseName": "Nguyễn Văn Ninh",
        "address": "175 Quốc lộ 13, phường 26, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Front - end",
        "Nickname": "Phim Ngo",
        "VietnameseName": "Ngô Dư Phim",
        "address": "175 Quốc lộ 13, phường 26, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Van Truong",
        "VietnameseName": "Trương Hồng Vân",
        "address": "5L, Ngô Sĩ Liên, phường 14, quận 8, TP.Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Anh Hai",
        "VietnameseName": "Nguyễn Huỳnh Hải Anh",
        "address": "Nhà 30, đường số 19B, Bình An (An Khánh), Quận 2 (TP Thủ Đức), Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Quy Lam",
        "VietnameseName": "Lâm Duy Quý",
        "address": "329 Lô T, cư xá Thanh Đa, P.27, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Dao Nguyen",
        "VietnameseName": "Nguyễn Văn Đạo",
        "address": "862 Nguyễn Kiệm, phường 3, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Truc Vo",
        "VietnameseName": "Võ Thanh Trúc",
        "address": "246/9F Phan Văn Trị, phường 12, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Nhu Nguyen",
        "VietnameseName": "Nguyễn Thái Quỳnh Như",
        "address": "9P/3 Bạch Đằng, phường 2, Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phong Cu",
        "VietnameseName": "Cù Ngọc Phong",
        "address": "26 Nguyễn Bá Tuyển, phường 12, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Son Ngoc",
        "VietnameseName": "Nguyễn Ngọc Sơn",
        "address": "108/11 đường 11, khu phố 5, phường Linh Xuân, quận Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Thu Nguyen",
        "VietnameseName": "Nguyễn Thị Anh Thư",
        "address": "C9.16 chung cư Celadon city - 36 Bờ Bao Tân Thắng, phường Sơn Kỳ, quận Tân Phú, thành phố Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Van Lam",
        "VietnameseName": "Nguyễn Lâm Văn",
        "address": "64 Châu Thị Hóa, phường 4, quận 8, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Anh Luong",
        "VietnameseName": "Lương Bảo Anh",
        "address": "B1.10 Chung cư Tín Phong, P. Tân Thới Nhất, quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Phuc To",
        "VietnameseName": "Tô Hồng Phúc",
        "address": "269/19 Bà Hom, phường 13, quận 6, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Dien Tang",
        "VietnameseName": "Tăng Thái Điền",
        "address": "33/15 Đường Tân Thới Hiệp 07, phường Tân Thới Hiệp, quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Duong Ngoc",
        "VietnameseName": "Đào Ngọc Dương",
        "address": "340/17/14/2 Tân Chánh Hiệp 10, phường Tân Chánh Hiệp, quận 13"
    },
    {
        "Department": "QC",
        "Nickname": "Khoa Pham",
        "VietnameseName": "Phạm Anh Khoa",
        "address": "108 đường DC11, p.Sơn Kỳ, q.Tân Phú\t\t\t\t"
    },
    {
        "Department": "QC",
        "Nickname": "Thao Tran",
        "VietnameseName": "Trần Thị Thảo",
        "address": "104/72 Phạm Văn Bạch, phường 15 quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Linh Nguyen",
        "VietnameseName": "Nguyễn Hà Phương Linh",
        "address": "16-18 Đường Số 1, Lương Đình Của, phường An Khánh, Tp. Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Thao Nham",
        "VietnameseName": "Nhâm Thị Thu Thảo",
        "address": "138/18 Ngô Quyền, phường 5, quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thanh Trung",
        "VietnameseName": "Nguyễn Trung Thành",
        "address": "624 Lê Văn Thọ, P.13, Q.Gò Vấp"
    },
    {
        "Department": "IS",
        "Nickname": "Nam Dang",
        "VietnameseName": "Đặng Hoài Nam",
        "address": "34/5/7 Cống Lở Phường 15, Quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Tien Nguyen",
        "VietnameseName": "Nguyễn Ngọc Tiên",
        "address": "Chung cư BIWASE, Số 400, Đường Trần Quang Diệu, Phường An Phú, Tp Thuận An, Tỉnh Bình Dương"
    },
    {
        "Department": "QC",
        "Nickname": "Nhan Thi",
        "VietnameseName": "Trần Thị Hoàng Nhạn",
        "address": "624 Lê Văn Thọ, P.13, Q.Gò Vấp, Tp.Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Tuan Au",
        "VietnameseName": "Âu Dương Tuấn",
        "address": "8/4A tổ 3 KP1 phường Bửu Long, thành phố Biên Hoà, tỉnh Đồng Nai"
    },
    {
        "Department": "BA",
        "Nickname": "My Nguyen",
        "VietnameseName": "Nguyễn Hàn Kiều My",
        "address": "Block Iris 4, chung cư Hà Đô Centrosa, số 200 đường 3 tháng 2, phường 12, quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Tri Nguyen",
        "VietnameseName": "Nguyễn Minh Trí",
        "address": "Tân Định, Tân Thông Hội, Củ Chi, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thanh Tran",
        "VietnameseName": "Trần Văn Thành",
        "address": "537 Phạm Văn Đồng, phường 13, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Vinh Le",
        "VietnameseName": "Lê Xuân Vinh",
        "address": "330/8 Hồng Lạc, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Dung Le",
        "VietnameseName": "Lê Quang Dũng",
        "address": "C/c Jamona, quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Uy Phan",
        "VietnameseName": "Phan Công Úy",
        "address": "193/16/17 Lê Đức Thọ, Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phat Le",
        "VietnameseName": "Lê Tấn Phát",
        "address": "195/27 Nguyễn Văn Thương, phường 25, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phap Nguyen",
        "VietnameseName": "Nguyễn Thái Pháp",
        "address": "533/17 Phạm Văn Bạch, phường 15, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Lap Tran",
        "VietnameseName": "Trần Thiện Lập",
        "address": "1/24 đường 74, tổ 4, khu phố 5, phường Phước Long A, quận 9, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hung Nguyen",
        "VietnameseName": "Nguyễn Viết Hưng",
        "address": "658/34 CMT8, phường 11, quận 3, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Phuong Thanh",
        "VietnameseName": "Lê Thanh Phương",
        "address": "688/13A Lê Đức Thọ, phường 15, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phuong Minh",
        "VietnameseName": "Nguyễn Minh Phương",
        "address": "66A Đường 77, P. Tân Qui, Q. 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tuan Vo",
        "VietnameseName": "Võ Minh Tuấn",
        "address": "7 Huỳnh Văn Bánh, P. 17, Q. Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Duong Nguyen",
        "VietnameseName": "Nguyễn Ngọc Thùy Dương",
        "address": "467/127 Lê Đức Thọ, Phường 16, Quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Linh Do",
        "VietnameseName": "Đỗ Bội Linh",
        "address": "299/30A/9 Lê Quang Sung, phường 6, quận 6, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phong Bui",
        "VietnameseName": "Bùi Thế Phong",
        "address": "146/97/77 Vũ Tùng, phường 2, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hoa Pham",
        "VietnameseName": "Phạm Thị Hoa",
        "address": "79/53 Ấp 7, Đông Thạnh, Hóc Môn, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Thi Uyen",
        "VietnameseName": "Nguyễn Dũng Uyên Thi",
        "address": "235 lô P, cư xá Thanh Đa, phường 27, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Chinh Ho",
        "VietnameseName": "Hồ Thị Chinh",
        "address": "53/12A KP2, phường Trung Mỹ Tây, quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "HR",
        "Nickname": "Hy Nguyen",
        "VietnameseName": "Nguyễn Hy",
        "address": "441/14/19 Điện Biên Phủ, phường 25, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Nhung Tran",
        "VietnameseName": "Trần Thị Hồng Nhung",
        "address": "P. 302, 18 lô A Cc Ngô Quyền, Q5, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Ha Le",
        "VietnameseName": "Lê Duy Hà",
        "address": "49/56/99 đường Trịnh Đình Vọng, phường Phú Trung, quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Lan Cao",
        "VietnameseName": "Cao Thị Lan",
        "address": "94 Nguyễn Du, phường 7, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Thuan Nguyen",
        "VietnameseName": "Nguyễn Đức Thuận",
        "address": "29/2 Đường 41, phường Bình Trảng Đông, Q2, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hung Le",
        "VietnameseName": "Lê Quốc Hùng",
        "address": "496/46/17 Dương Quảng Hàm, phường 6, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "My Vo",
        "VietnameseName": "Võ Thị Mai Mỹ",
        "address": "75 Nguyễn Đình Khơi, phường 4, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Quang Minh",
        "VietnameseName": "Lê Minh Quang",
        "address": "118 Lê Thị Hồng, P.17, Q. Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Long Phan",
        "VietnameseName": "Phan Đình Minh Long",
        "address": "28/29/5 Phan Tây Hồ, phường 7, quận Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Phuc Hoang",
        "VietnameseName": "Nguyễn Hoàng Phúc",
        "address": "18 Nguyễn Thị Nhỏ, phường 14, quận 5, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Hien Dieu",
        "VietnameseName": "Nguyễn Diệu Hiền",
        "address": "114/57/16 Dương Quảng Hàm, phường 15, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Tri Minh",
        "VietnameseName": "Nguyễn Minh Trị",
        "address": "52/101 Nguyễn Sỹ Sách, phường 15 quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Thao Duc",
        "VietnameseName": "Lê Đức Phương Thảo",
        "address": "89/15 Nguyễn Thượng Hiền, P. 5, Q. Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Nicolas Richaud",
        "VietnameseName": "Nicolas De Richaud",
        "address": "71/3 Nguyễn Văn Thương, P. 25, Q. Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Huy Nguyen",
        "VietnameseName": "Nguyễn Tuấn Huy",
        "address": "207 Nguyễn Xí, P. 26, Q. Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Phuong Hoang",
        "VietnameseName": "Hoàng Trịnh Phương",
        "address": "549A Nguyễn Văn Quá, P. Đông Hưng Thuận, Q. 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nhan Do",
        "VietnameseName": "Đỗ Trọng Nhân",
        "address": "25/33/66 Bùi Quang Là, Q. Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Truc Nguyen",
        "VietnameseName": "Nguyễn Thị Thanh Trúc",
        "address": "694/16 Nguyễn Kiệm, P. 14, Q. Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Cuong Hoang",
        "VietnameseName": "Hoàng Cao Cường",
        "address": "B.608 cc Nhiêu Tứ 1, P.7, Q. Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Vi Tran",
        "VietnameseName": "Trần Kim Nhật Vi",
        "address": "13/8 Trần Kế Xương, P. 3, Q. Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Chuong Hoang",
        "VietnameseName": "Hoàng Gia Khánh Chương",
        "address": "Đường 30, chung cư 4S Linh Đông, P. Linh Đông, TP. Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Truong Nguyen",
        "VietnameseName": "Nguyễn Quốc Trường",
        "address": "32 Nguyễn Đình Khơi, P. 4, Q. Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Quang Ho",
        "VietnameseName": "Lê Hồ Quang",
        "address": "20/3B KP 2, Quốc lộ 1A, P. Trung Mỹ Tây, Q. 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tuyen Nguyen",
        "VietnameseName": "Nguyễn Chí Tuyến",
        "address": "26 Nguyễn Văn Thạnh, P. Long Thạnh Mỹ, TP. Thủ Đức"
    },
    {
        "Department": "IS",
        "Nickname": "Tien Bui",
        "VietnameseName": "Bùi Quang Tiến",
        "address": "223/12 cư xá Lữ Gia, P. 15, Q. 11, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Huy Thien",
        "VietnameseName": "Nguyễn Thiện Huy",
        "address": "191/41/7 Lê Lợi, P. 3, Q. Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tai Pham",
        "VietnameseName": "Phạm Đại Tài",
        "address": "A50, đường D1, P. Tân Thới Nhất, Q. 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Mai Nguyen",
        "VietnameseName": "Nguyễn Thị Mai",
        "address": "Chung cư Bộ Công An, Phường An Khánh, Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Minh Bui",
        "VietnameseName": "Nguyễn Bùi Hoàng Minh",
        "address": "227 Hoàng Hoa Thám, phường 13, quận Tân Bình, Thành phố Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tuan Tran",
        "VietnameseName": "Trần Quốc Tuấn",
        "address": "69/11 đường số 5, phường Tăng Nhơn Phú B, quận 9, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Anh Duy",
        "VietnameseName": "Hoàng Duy Anh",
        "address": "46/10/6 Nguyễn Cửu Vân, Quận Bình Thạnh, Tp. Hồ Chí Minh "
    },
    {
        "Department": "BA",
        "Nickname": "Cuong Pham",
        "VietnameseName": "Phạm Mạnh Cường",
        "address": "222 Quang Trung, phường 10, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tai Huu",
        "VietnameseName": "Phạm Hữu Tài",
        "address": "86B Hùng Vương, phường 9, quận 5, Tp. Hồ Chí Minh"
    },
    {
        "Department": "HR",
        "Nickname": "Nhi Pham",
        "VietnameseName": "Phạm Trần Yến Nhi",
        "address": "159 Xa Lộ Hà Nội, Phường Thảo Điền, Quận 2, TP.Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Thi Le",
        "VietnameseName": "Lê Kim Thi",
        "address": "34/4 Đường 27, Phạm Văn Đồng, P. Hiệp Bình Chính, TP. Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Khoa Chau",
        "VietnameseName": "Trần Thị Châu Khoa",
        "address": "86/53  TCH 36, Phường Tân Chánh Hiệp, Quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Duy Vu",
        "VietnameseName": "Nguyễn Hà Vũ Duy",
        "address": "57 Tản Đà, Phường 10, Quận 5, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nhan Nguyen",
        "VietnameseName": "Nguyễn Thanh Nhân",
        "address": "49/14/12 Bùi Quang Là, P. 12, Q. Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "My Le",
        "VietnameseName": "Lê Hà My",
        "address": "339/63 Lê Văn Sỹ, P.13, Q.3, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Sinh Dang",
        "VietnameseName": "Đặng Phước Sinh",
        "address": "250B Tân Kỳ Tân Quý, P. Sơn Kỳ, Q. Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Linh Cat",
        "VietnameseName": "Nguyễn Hoài Cát Linh",
        "address": "50/2 Ba Vân, phường 14, quận Tân Bình, TPTp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Phuc Le",
        "VietnameseName": "Lê Minh Phúc",
        "address": "373/197/8 Lý Thường Kiệt, Phường 9, Q. Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Loc Lam",
        "VietnameseName": "Lâm Tuấn Lộc",
        "address": "221 Phan Đình Phùng, Phường 15, Q. Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Uyen Phan",
        "VietnameseName": "Phan Thị Phương Uyên",
        "address": "688/13A Lê Đức Thọ, Phường 15, !uận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Thinh Pham",
        "VietnameseName": "Phạm Nguyễn Khánh Thịnh",
        "address": "338/1 Điện Biên Phủ, Phường 11, Quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Xuan Nguyen",
        "VietnameseName": "Nguyễn Viết Xuân",
        "address": "24c/31 Đường số 5, Phường Linh Chiểu, TP. Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Trung Luong",
        "VietnameseName": "Lương Tiên Trung",
        "address": "118/55A, Lê Trọng Tấn, Tây Thạnh, Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Trieu Luong",
        "VietnameseName": "Lương Văn Triệu",
        "address": "160/43 Phan Huy Ích, phường 12, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Khang Nguyen",
        "VietnameseName": "Nguyễn Triệu Khang",
        "address": "163/15/2 Tô Hiến Thành P.13 Q.10 Tp.Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Bao Ly",
        "VietnameseName": "Lý Gia Bảo",
        "address": "47, đường số 24A, phường Bình Trị Đông B, quận Bình Tân, Tp.Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tran Nguyen",
        "VietnameseName": "Nguyễn Hoài Trân",
        "address": "Số 6 Nghĩa Hưng, Phường 6, Quận Tân Bình, TP Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Uyen Nguyen",
        "VietnameseName": "Nguyễn Đỗ Phương Uyên",
        "address": "20/4 Tân Tiến 12, ấp Tân Tiến, xã Xuân Thới Đông, huyện Hóc Môn, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Linh Bui",
        "VietnameseName": "Bùi Tuấn Linh",
        "address": "T3-703 Riviera Point, Nguyễn Văn Tưởng, Quận 7, Phường Tân Phú, TPTp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phong Le",
        "VietnameseName": "Lê Xuân Phong",
        "address": "71/75 Đường số 3, khu phố 13, phường Bình Hưng Hòa A, quận Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "An Thien",
        "VietnameseName": "Phạm Thiên Ân",
        "address": "207 Độc Lập, Phường Tân Quý, Quận Tân Phú, TPTp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Ha Do",
        "VietnameseName": "Đỗ Thị Hà",
        "address": "Chung cư Hưng Ngân, 48A Dương Thị Mười, Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "That Nguyen",
        "VietnameseName": "Nguyễn Văn Thất",
        "address": "Tổ 17, KP4, P. Trảng Dài, TP Biên Hòa, Tỉnh Đồng Nai"
    },
    {
        "Department": "IS",
        "Nickname": "Thanh Do",
        "VietnameseName": "Đỗ Xuân Thành",
        "address": "90 Tam Đảo, Phường 14, Quận 10, TPTp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Dung Bui",
        "VietnameseName": "Bùi Thanh Dung",
        "address": "3/33 Nguyễn Thái Sơn, P.3, Gò Vấp, Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phu Nguyen",
        "VietnameseName": "Nguyễn Thành Phú",
        "address": "154/72/17 Phạm Văn Hai, P.3, Q. Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Dong Dang",
        "VietnameseName": "Đặng Minh Đồng",
        "address": "60 Trần Văn Danh, phường 13, quận Tân Bình, thành phố Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hoa Vu",
        "VietnameseName": "Vũ Trọng Hóa",
        "address": "Chung cư 8x plus - 163A Trường Chinh, phường Tân Thới Nhất, Q12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Thuy Vu",
        "VietnameseName": "Vũ Thị Thu Thủy",
        "address": "Tổ 17, KP4, P. Trảng Dài, TP Biên Hòa, Tỉnh Đồng Nai"
    },
    {
        "Department": "BA",
        "Nickname": "Hieu Pham",
        "VietnameseName": "Phạm Nguyễn Minh Hiếu",
        "address": "528/113 Điện Biên Phủ, phường 9, quạn 3, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Thuy Nguyen",
        "VietnameseName": "Nguyễn Thị Bích Thủy",
        "address": "35 Tứ Hải, phường 6, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thuat Pham",
        "VietnameseName": "Phạm Đình Thuật",
        "address": "Tổ 27, ấp Dân Thắng 1, Tân Thới Nhì, Hóc Môn, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hung Viet",
        "VietnameseName": "Nguyễn Viết Hưng",
        "address": "Số 1A, đường 249, phường Tân Phú, quận 9, thành phố Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hung Tran",
        "VietnameseName": "Trần Văn Hưng",
        "address": "405/46/40 Thống nhất, P.11, Q. Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Long Dang",
        "VietnameseName": "Đặng Thanh Long",
        "address": "52/3 Nguyễn Văn Đậu, P.3, Q. Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hai Vu",
        "VietnameseName": "Vũ Hoàng Minh Hải",
        "address": "548/29/4 Tân Kỳ Tân Quý, Bình Hưng Hòa, Bình Tân, TP Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Minh Tran",
        "VietnameseName": "Trần Hoàng Minh",
        "address": "944/36 Huỳnh Tấn Phát, phường Tân Phú, Quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Qui Ha",
        "VietnameseName": "Hà Văn Quí",
        "address": "406/6 Cộng Hòa, P. 13, Q. Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tin Ly",
        "VietnameseName": "Lý Hoàng Tín",
        "address": "49/56/99 Trịnh Đình Trọng, phường Phú Trung, quận Tân Phú, TP.Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nam Hoang",
        "VietnameseName": "Hoàng Quốc Nam",
        "address": "453/71 KA Lê Văn Sỹ, P.12, Q.3, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Lap Dao",
        "VietnameseName": "Đào Công Lập",
        "address": "119 Bình Long, P. Bình Hưng Hoà A, Quận Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phung Le",
        "VietnameseName": "Lê Văn Minh Phụng",
        "address": "43A Phan Văn Hớn, Quận 12, Thành phố Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Thu Pham",
        "VietnameseName": "Phạm Hồ Linh Thư",
        "address": "33/11 Trần Bình Trọng, P1, Q5, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thuong Le",
        "VietnameseName": "Lê Văn Thương",
        "address": "Đường TMT13, Phường Trung Mĩ Tây, Q. 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Truong Huu",
        "VietnameseName": "Nguyễn Hữu Trương",
        "address": "05.18 S1.01 Vinhomes Grand Park, phường Long Thạnh Mỹ, Quận 9, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Huy Bui",
        "VietnameseName": "Bùi Quốc Huy",
        "address": "42/19 Nghĩa Phát, P.6, Q. Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Loc Vo",
        "VietnameseName": "Võ Thái Lộc",
        "address": "Hẻm 14 trường sa P.17 Q.Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Quang Pham",
        "VietnameseName": "Phạm Bá Hải Quang",
        "address": "129/66 Nguyễn Văn Công, phường 3, Quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Anh Kieu",
        "VietnameseName": "Nguyễn Kiều Anh",
        "address": "842/1/30 Nguyễn Kiệm, Phường 3, Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Khang Lam",
        "VietnameseName": "Lâm Bảo Khang",
        "address": "6A, Phùng Chí Kiên, P. Tân Qúy, Q. Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Tai Phung",
        "VietnameseName": "Phùng Mạnh Tài",
        "address": "toà riverside 90 Nguyễn Hữu Cảnh, phường 22, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Cuong Do",
        "VietnameseName": "Đỗ Quốc Cường",
        "address": "101/162/8/10 ấp 4 xã Đông Thạnh, Hóc Môn, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Toan Dieu",
        "VietnameseName": "Diêu Văn Toàn",
        "address": "83/41 Phạm Văn Bạch, Phường 15, Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Minh Pham",
        "VietnameseName": "Phạm Ngọc Minh",
        "address": "49/52 Âu Cơ, P. 14, Q. 11, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Dat Nguyen",
        "VietnameseName": "Nguyễn Thành Đạt",
        "address": "45/46A Trần Thái Tông, p.15, Q.Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tri Tran",
        "VietnameseName": "Trần Minh Trí",
        "address": "146/1A Nguyễn Chế Nghĩa, phường 12, quận 8, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Thang Nguyen",
        "VietnameseName": "Nguyễn Văn Thắng",
        "address": "81/1 đường số 12, phường Bình Hưng Hòa, quận Bình Tân, thành phố Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Kha Vo",
        "VietnameseName": "Võ Nhựt Kha",
        "address": "C2/12 ấp 4, xã Bình Hưng, huyện Bình Chánh, TPTp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Nguu Nguyen",
        "VietnameseName": "Nguyễn Kim Ngưu",
        "address": " 129/9A Nguyễn Công Hoan, phường 7, quận Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Anh Khoi",
        "VietnameseName": "Nguyễn Khôi Anh",
        "address": "Căn hộ 0604, lô B1 chung cư An Lộc 1, khu phố 5, phường An Phú, Quận 2, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Nam Cong",
        "VietnameseName": "Hoàng Công Nam",
        "address": "36 Mai Chí Thọ, Quận 2, Phường An Phú, TP Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Ngan Nguyen",
        "VietnameseName": "Nguyễn Thị Kim Ngân",
        "address": "1569 Nguyễn Cửu Phú xã Tân Kiên huyện Bình Chánh Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Y Chau",
        "VietnameseName": "Châu Minh Ý",
        "address": "503/1 Trần Xuân Soạn, Tân Kiểng, Quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Vinh The",
        "VietnameseName": "Lê Trần Thế Vinh",
        "address": "Chung cư Citihome, phường Cát Lái, Quận 2, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Dat Vo",
        "VietnameseName": "Võ Minh Đạt",
        "address": "194/50/8 Bạch Đằng, P24, Bình Thạnh, TP.Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Lam Lai",
        "VietnameseName": "Lại Dũng Lâm",
        "address": "7.24 Moscow Tower, KP.4, P. Tân Thới Nhất, Q. 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Mai Xuan",
        "VietnameseName": "Trần Xuân Mai",
        "address": "18 lô B Bùi Minh Trực, phường 6, quận 8, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Duong Phan",
        "VietnameseName": "Phan Ánh Dương",
        "address": "25/17/6 Đoàn Giỏi, P. Sơn Kỳ, Q. Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Long Truong",
        "VietnameseName": "Trương Thanh Long",
        "address": "28/34 Trần Bình Trọng, phường 1, quận 5, Tp Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Ngan Le",
        "VietnameseName": "Lê Thanh Ngân",
        "address": "136 Trần Quang Diệu, Phường 14, Quận 3, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Phuong Hoang Tran",
        "VietnameseName": "Trần Hoàng Phương",
        "address": "338/25 Lê Văn Khương, P. Thới An, Q. 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Phu Ha",
        "VietnameseName": "Hà Phi Phú",
        "address": "14/23B Văn Chung, P.13, Q. Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hai Pham",
        "VietnameseName": "Phạm Văn Hải",
        "address": "111/13 Phạm Văn Chiêu, p14, Q.Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Hung Vo",
        "VietnameseName": "Võ Quốc Hùng",
        "address": "C/c Sài Gòn Residence, Phước Kiến, Nhà Bè, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Vinh Van",
        "VietnameseName": "Lê Văn Vĩnh",
        "address": "482/12/2E Lê Quang Định, phường 11, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Ninh Van",
        "VietnameseName": "Nguyễn Văn Ninh",
        "address": "8 đường số 1, phường Tân Thuận Đông, quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Cuong Ngo",
        "VietnameseName": "Ngô Phú Cường",
        "address": "214/129C Nguyễn Trãi, quận 1, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Phuong Bich",
        "VietnameseName": "Lê Thị Bích Phượng",
        "address": "28/12 Nguyễn Hiến Lê, phường 13, quận Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Thanh Hai",
        "VietnameseName": "Nguyễn Sỹ Hải Thanh",
        "address": "phường 15 Quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Duong Bui",
        "VietnameseName": "Bùi Quý Dương",
        "address": "A5/51B1 Ấp 1B, Đường liên ấp 123, Vĩnh lộc A, Bình Chánh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Phuong Pham",
        "VietnameseName": "Phạm Thị Kim Phượng",
        "address": "C10.08 chung cư Emerald 36 Bờ Bao Tân Thắng, P. Sơn K, Q.Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Chieu Pham",
        "VietnameseName": "Phạm Thị Chiều",
        "address": "10/6 đường số 9, Hiệp Bình Chánh, Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Huy Minh",
        "VietnameseName": "Võ Minh Huy",
        "address": "389/5/22A quốc lộ 13, Hiệp Bình Phước, Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Chanh Giang",
        "VietnameseName": "Giang Kim Chánh",
        "address": "76 Hùng Vương, phường 1, quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Quang Truong",
        "VietnameseName": "Trương Thanh Quang",
        "address": "không ở HCM"
    },
    {
        "Department": "IS",
        "Nickname": "Loi Nguyen",
        "VietnameseName": "Nguyễn Thành Lợi",
        "address": "915/74 đường C2, tổ 17, ấp 3, Phước Kiến, Nhà Bè, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tuan Hua",
        "VietnameseName": "Hứa Minh Tuấn",
        "address": "31/1 Trương Đình Hội, Phường 16, Quận 8, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Hoai Nguyen",
        "VietnameseName": "Nguyễn Vũ Hoài",
        "address": "965/16/7 Quang Trung, phường 14, quận Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Tung Doan",
        "VietnameseName": "Đoàn Sơn Tùng",
        "address": "Khu phố 9, Mỹ Đông, Thành phố Phan Rang – Tháp Chàm, Tỉnh Ninh Thuận"
    },
    {
        "Department": "BA",
        "Nickname": "Quoc Hoang",
        "VietnameseName": "Lê Hoàng Anh Quốc",
        "address": "783 Trần Xuân Soạn, phường Tân Hưng, quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Lam Nguyen",
        "VietnameseName": "Nguyễn Sơn Lâm",
        "address": "30/1 Đường 47 P. Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nguyen Ngo",
        "VietnameseName": "Ngô Thành Nguyên",
        "address": "390/81 Nguyễn Đình Chiểu, phường 4, quận 3, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Admin",
        "Nickname": "Dao Anh",
        "VietnameseName": "Nguyễn Thị Anh Đào",
        "address": "72/23/13 Đường 20, phường 6, Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Linh Le",
        "VietnameseName": "Lê Khánh Linh",
        "address": "25 đường A4, P.12, Q. Tân Bình, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IT",
        "Nickname": "Sinh Nguyen",
        "VietnameseName": "Nguyễn Ngọc Sinh",
        "address": "7/2 Đường số 7, P. 7, Q. Gò Vấp, Tp. Hồ Chí Minh"
    },
    {
        "Department": "QC",
        "Nickname": "Cong Vo",
        "VietnameseName": "Võ Thành Công",
        "address": "686/43/2 Quốc Lộ 1A, Khu Phố 9, Bình Hưng Hòa B, Bình Tân, Tp. Hồ Chí Minh"
    },
    {
        "Department": "DB",
        "Nickname": "Bao Quoc",
        "VietnameseName": "Lê Quốc Bảo",
        "address": "01.21 chung cư B1, 06-10 Trường Sa, Phường 17, Quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Loc Huynh",
        "VietnameseName": "Huỳnh Phúc Lộc",
        "address": "22 Đường Số 1, Phường Tân Phú, Quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Liem Duong",
        "VietnameseName": "Dương Thành Liêm",
        "address": "60 Đường số 1, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "BA",
        "Nickname": "Dat Duong",
        "VietnameseName": "Dương Thành Đạt",
        "address": "36/24/21 đường số 4, phường Hiệp Bình Phước, Tp. Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Phi Tran",
        "VietnameseName": "Trần Phi",
        "address": "606/8 đường 3 tháng 2, phường 14, Quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nhat Le",
        "VietnameseName": "Lê Minh Nhật",
        "address": "52 đường 72, phường 10, quận 6, Tp. Hồ Chí Minh"
    },
    {
        "Department": "PMO",
        "Nickname": "Khoa Xuan",
        "VietnameseName": "Nguyễn Xuân Luật Khoa",
        "address": "2/128A Ấp Đình 4, xã Tân Xuân, huyện Hóc Môn, Tp. Hồ Chí Minh "
    },
    {
        "Department": "IS",
        "Nickname": "Phat Nguyen",
        "VietnameseName": "Nguyễn Trường Phát",
        "address": "95 đường Trương Quốc Dung, phường 10, quận Phú Nhuận, tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hao Phan",
        "VietnameseName": "Phan Thanh Hào",
        "address": "486 đường 3/2, phường 14, quận 10, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nam Phan",
        "VietnameseName": "Phan Minh Nam",
        "address": "Chung cư Topaz Home 2, đường 154, phường Tân Phú, Thành Phố Thủ Đức, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Mai Hoang",
        "VietnameseName": "Hoàng Như Mai",
        "address": "Phòng A4A, chung cư Thuận Việt, 319 đường Lý Thường Kiệt, phường 15, quận 11, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Anh Tuan",
        "VietnameseName": "Nguyễn Tuấn Anh",
        "address": "301/15 Phan Xích Long, p1, quận Phú Nhuận, Tp. Hồ Chí Minh"
    },
    {
        "Department": "Design",
        "Nickname": "Tram Nguyen",
        "VietnameseName": "Nguyễn Phạm Ngọc Trâm",
        "address": "148/3A đường Nguyễn Lâm, phường 3, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tai Tran",
        "VietnameseName": "Trần Trí Tài",
        "address": "D14 đường 5A, phường Tân Hưng, quận 7, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Long Le",
        "VietnameseName": "Lê Thế Long",
        "address": "24A đường Khuôn Việt, quận Tân Phú, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Khoa Anh",
        "VietnameseName": "Nguyễn Anh Khoa",
        "address": "104/9A2 khu phố 2, phường Đông Hưng Thuận, quận 12, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Hau Truong",
        "VietnameseName": "Trương Quang Hậu",
        "address": "27/3 đường Phan Chu Trinh, phường 2, quận Bình Thạnh, Tp. Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Nhut Nguyen",
        "VietnameseName": "Nguyễn Văn Nhứt",
        "address": "540, khu 3, ấp Phước hội, xã Long Hưng, thành phố Biên Hòa, tỉnh Đồng Nai"
    },
    {
        "Department": "Admin",
        "Nickname": "Tung Dinh",
        "VietnameseName": "Đinh Quang Tùng",
        "address": "T1-B31.10 Masteri Thảo Điền, Xa Lộ Hà Nội, TP Thủ Đức, TP Hồ Chí Minh"
    },
    {
        "Department": "IS",
        "Nickname": "Tai Bui",
        "VietnameseName": "Bùi Ngọc Tài",
        "address": "194 đường 138, phường Tân Phú, quận 9, Tp. Thủ Đức, Tp. Hồ Chí Minh"
    }
]

export default staffs;
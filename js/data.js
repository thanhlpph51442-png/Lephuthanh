/**
 * BẢN ĐỒ TẾT VIỆT - DỮ LIỆU VĂN HÓA TẾT BA MIỀN
 * Chứa đầy đủ thông tin về Vùng miền, Phong tục, Ẩm thực, Kiêng kỵ, So sánh & Quẻ bốc lì xì
 */

const TET_DATA = {
  // THÔNG TIN CHI TIẾT 3 VÙNG MIỀN
  regions: {
    bac: {
      id: "bac",
      name: "Miền Bắc",
      title: "Tết Miền Bắc - Sắc Đào Thắm & Nét Cổ Kính Tràng An",
      flower: "Hoa Đào (Bích đào, Đào phai Nhật Tân)",
      flowerIcon: "🌸",
      climate: "Tiết trời se lạnh, lất phất mưa xuân phùn",
      color: "#D32F2F",
      bgGradient: "linear-gradient(135deg, #7F1D1D 0%, #B91C1C 100%)",
      description: "Tết miền Bắc mang đậm nét cổ kính, trang trọng và tinh tế của đất kinh kỳ Thăng Long. Giữa làn mưa phùn lành lạnh đầu xuân, sắc thắm của hoa đào và khói hương trầm nghi ngút tạo nên không gian đoàn viên ấm cúng vô cùng thiêng liêng.",
      bannerImage: "assets/images/hoa_dao.jpg",
      greeting: "Chúc Mừng Năm Mới - Vạn Sự Như Ý - An Khang Thịnh Vượng",
      
      customs: [
        {
          id: "ong-tao-bac",
          name: "Cúng Ông Công Ông Táo",
          icon: "🐟",
          image: "assets/images/ong_tao.jpg",
          date: "23 tháng Chạp",
          meaning: "Tiễn thần Bếp về chầu trời, báo cáo công việc năm cũ và cầu mong gia đạo bình an, no ấm.",
          description: "Vào ngày 23 tháng Chạp, người miền Bắc chuẩn bị mâm cỗ tươm tất với xôi gấc, giò, gà luộc và 3 chú cá chép đỏ còn sống. Sau lễ cúng, mọi người mang cá ra sông hồ thả phóng sinh để cá hóa rồng đưa ông Táo chầu trời.",
          tags: ["Tâm linh", "Đoàn viên"]
        },
        {
          id: "banh-chung-bac",
          name: "Gói Bánh Chưng Xanh",
          icon: "🎋",
          image: "assets/images/banh_chung.jpg",
          date: "27 - 29 tháng Chạp",
          meaning: "Tượng trưng cho Đất vuông tròn, thể hiện lòng biết ơn sâu sắc đối với tổ tiên và cội nguồn đất trời.",
          description: "Cả gia đình quây quần gói bánh chưng bằng lá dong xanh mướt, gạo nếp nương, đỗ xanh và thịt lợn ướp tiêu thơm nồng. Cảnh thức thâu đêm canh nồi bánh chưng sôi ùng ục bên bếp lửa hồng là ký ức Tết ấm áp nhất của người Bắc.",
          tags: ["Ẩm thực", "Gia đình"]
        },
        {
          id: "chuc-tet-bac",
          name: "Chúc Tết & Mừng Tuổi",
          icon: "🧧",
          image: "assets/images/hoa_dao.jpg",
          date: "Mùng 1 - Mùng 3",
          meaning: "Thực hiện nếp sống 'Mùng một Tết cha, mùng hai Tết mẹ, mùng ba Tết thầy' chan chứa đạo lý tri ân.",
          description: "Sáng mùng Một, con cháu kính cẩn chúc thọ ông bà, cha mẹ và nhận phong bao lì xì đỏ lấy may. Người miền Bắc rất trọng lễ nghi, lời chúc đầu năm luôn chân thành, chúc sức khỏe trường thọ và bình an.",
          tags: ["Nghi lễ", "Hiếu đạo"]
        },
        {
          id: "di-le-bac",
          name: "Đi Lễ Chùa & Xin Chữ Đầu Năm",
          icon: "🏛️",
          image: "assets/images/hoa_dao.jpg",
          date: "Đầu xuân năm mới",
          meaning: "Cầu mong năm mới quốc thái dân an, gia đạo thuận hòa, hướng tâm về cái thiện và sự thanh tịnh.",
          description: "Sau khoảnh khắc giao thừa hoặc sáng sớm mùng Một, người dân đến các ngôi đền, chùa cổ kính để thắp hương, cầu an và xin lộc. Nhiều người còn đến Văn Miếu - Quốc Tử Giám xin chữ ông đồ với ước mong con đường học hành, sự nghiệp hanh thông.",
          tags: ["Cầu an", "Văn hóa"]
        },
        {
          id: "xong-dat-bac",
          name: "Xông Đất Đầu Năm",
          icon: "🚪",
          image: "assets/images/banh_chung.jpg",
          date: "Đêm giao thừa - Sáng mùng 1",
          meaning: "Người đầu tiên bước vào nhà sau giao thừa sẽ quyết định vận khí, tài lộc của cả gia đình trong năm mới.",
          description: "Gia chủ thường chọn người hợp tuổi, tính tình xởi lởi, phúc hậu và có cuộc sống hanh thông để nhờ xông nhà. Người xông đất mang theo lời chúc tốt đẹp cùng những món quà tượng trưng cho sự may mắn, cát tường.",
          tags: ["Phong thủy", "Tài lộc"]
        }
      ],

      foods: [
        {
          name: "Bánh Chưng",
          icon: "🟩",
          image: "assets/images/banh_chung.jpg",
          taste: "Dẻo bùi nếp đỗ, béo ngậy thịt mỡ, thơm nồng tiêu bắc",
          meaning: "Biểu trưng cho Đất mẹ phì nhiêu, sự vẹn toàn, vuông vức và viên mãn trong cuộc sống.",
          description: "Bánh vuông vắn bọc trong lá dong xanh tự nhiên, luộc kỹ 10-12 tiếng. Khi cắt bánh bằng lạt tre, từng miếng bánh lộ rõ lớp nếp xanh ngọc, nhân đỗ vàng mịn ôm lấy miếng thịt mỡ trong veo hấp dẫn."
        },
        {
          name: "Thịt Đông",
          icon: "🍲",
          image: "assets/images/mam_co_trung.jpg",
          taste: "Thanh mát, mềm tan đầu lưỡi, béo nhẹ và giòn sần sật của mộc nhĩ",
          meaning: "Biểu trưng cho sự gắn kết hòa thuận, tình cảm gia đình khăng khít bền chặt.",
          description: "Món ăn độc nhất vô nhị chỉ có trong mùa đông giá rét miền Bắc. Thịt chân giò, bì lợn và mộc nhĩ được ninh nhừ, để qua đêm sẽ tự đông lại trong veo như thạch. Ăn kèm dưa hành muối chua cay là chuẩn vị ngày xuân."
        },
        {
          name: "Dưa Hành Muối",
          icon: "🧅",
          image: "assets/images/banh_chung.jpg",
          taste: "Chua dịu, giòn rụm, hơi cay the ấm nồng",
          meaning: "Giúp tiêu hóa tốt, khai vị kích thích vị giác và biểu trưng cho sự thăng hoa, nảy nở.",
          description: "Nằm trong câu đối kinh điển 'Thịt mỡ dưa hành câu đối đỏ'. Hành củ trắng nõn được muối lên men tự nhiên, giòn tan, vị chua ngọt vừa vặn giúp hóa giải cảm giác ngấy của bánh chưng và thịt đông mỡ màng."
        },
        {
          name: "Giò Lụa & Giò Thủ",
          icon: "🍖",
          image: "assets/images/banh_chung.jpg",
          taste: "Giò lụa thơm mịn giòn ngọt tự nhiên; giò thủ sần sật đậm đà tiêu hạt",
          meaning: "Tượng trưng cho sự phú quý, 'trong ấm ngoài êm', cuộc sống đủ đầy sung túc.",
          description: "Giò lụa được giã nhuyễn từ thịt nạc mông tươi nóng hổi, gói lá chuối hấp chín tới. Đĩa giò cắt hình cánh hoa trang trí trên mâm cỗ thể hiện sự chỉn chu, khéo léo của người phụ nữ Tràng An."
        },
        {
          name: "Canh Măng Mực / Măng Nấu Móng Giò",
          icon: "🥣",
          image: "assets/images/banh_chung.jpg",
          taste: "Nước dùng ngọt thanh đậm đà, măng khô dai mềm sần sật thơm quyến rũ",
          meaning: "Biểu tượng của sức sống dẻo dai vươn lên, vượt qua gian khó như thân măng tre.",
          description: "Bát canh măng nóng hổi nghi ngút khói giữa tiết trời lạnh buốt của miền Bắc. Măng khô được ngâm kỹ nấu cùng móng giò hoặc sườn non béo mềm, rắc thêm chút hành hoa và tiêu bắc nồng ấm."
        }
      ],

      taboos: [
        {
          rule: "Kiêng quét nhà, hốt rác ngày Mùng Một",
          reason: "Theo điển tích xưa, quét nhà đầu năm là quét hết tài lộc, may mắn và tiền tài ra khỏi cửa, khiến cả năm gia cảnh thất thoát.",
          severity: "Rất quan trọng"
        },
        {
          rule: "Tránh làm rơi vỡ bát đĩa, gương chén",
          reason: "Từ 'vỡ', 'bể' gợi sự chia cắt, đổ vỡ trong gia đình, các mối quan hệ rạn nứt hoặc điềm xui không may mắn.",
          severity: "Tối kỵ"
        },
        {
          rule: "Tránh nói lời xui xẻo, gở miệng hoặc cãi vã",
          reason: "Đầu năm cần lời hay ý đẹp để đón sinh khí tươi vui. Nói gở miệng hoặc tranh cãi sẽ mang đến bầu không khí u ám cả năm.",
          severity: "Quan trọng"
        },
        {
          rule: "Kiêng cho lửa, cho nước ngày đầu năm",
          reason: "Lửa đỏ tượng trưng cho may mắn, nước tượng trưng cho tài lộc dồi dào. Cho đi đầu năm là đem vận đỏ của nhà mình cho người khác.",
          severity: "Phong tục xưa"
        },
        {
          rule: "Kiêng mặc đồ thuần trắng hoặc thuần đen",
          reason: "Màu đen và trắng tuyền thường gợi nhắc đến tang tóc, đau buồn. Thay vào đó, chuộng trang phục đỏ, vàng, hồng rực rỡ đón xuân.",
          severity: "Văn hóa ứng xử"
        }
      ]
    },

    trung: {
      id: "trung",
      name: "Miền Trung",
      title: "Tết Miền Trung - Đậm Đà Bản Sắc & Tấm Lòng Tri Ân",
      flower: "Hoa Mai Vàng, Hoa Đào & Cúc Vạn Thọ",
      flowerIcon: "🌼",
      climate: "Dịu mát, gió nhẹ hoặc nắng hanh ấm áp",
      color: "#F57C00",
      bgGradient: "linear-gradient(135deg, #9A3412 0%, #EA580C 100%)",
      description: "Tết miền Trung mộc mạc, sâu sắc và đậm chất tri ân nguồn cội. Là dải đất hẹp chịu nhiều gian khó mưa bão, người miền Trung nâng niu từng hạt gạo, giọt mắm. Mâm cơm ngày Tết chứa đựng sự khéo léo, đậm đà và bền bỉ kiên cường.",
      bannerImage: "assets/images/mam_co_trung.jpg",
      greeting: "Mừng Xuân Sang - Phú Quý An Khang - Phúc Thọ Vẹn Toàn",

      customs: [
        {
          id: "cung-gia-tien-trung",
          name: "Lễ Cúng Gia Tiên Trang Trọng",
          icon: "🕯️",
          image: "assets/images/mam_co_trung.jpg",
          date: "Trưa 30 Tết đến Mùng 3",
          meaning: "Tưởng nhớ tiền nhân, bày tỏ lòng thành kính và tri ân sâu nặng với cội nguồn tổ tiên.",
          description: "Bàn thờ ngày Tết của người miền Trung luôn được lau dọn từ rất sớm bằng nước thơm ngũ vị. Mâm cỗ dâng cúng tổ tiên luôn chuẩn bị đủ đầy, trang nghiêm, con cháu quây quần thắp nén nhang thành kính báo cáo công việc.",
          tags: ["Hiếu đạo", "Tâm linh"]
        },
        {
          id: "trang-tri-ban-tho-trung",
          name: "Trang Trí Bàn Thờ & Lau Đèn Đồng",
          icon: "✨",
          image: "assets/images/mam_co_trung.jpg",
          date: "25 - 29 tháng Chạp",
          meaning: "Thắp sáng sinh khí gia môn, giữ ấm không gian thờ tự linh thiêng của ngôi nhà.",
          description: "Các bộ lư đồng, chân nến được đánh bóng sáng loáng như mới. Trên bàn thờ luôn có đĩa cau trầu têm cánh phượng, chén nước thanh tịnh, bình hoa cúc vàng hoặc vạn thọ ngát hương thơm trầm ấm.",
          tags: ["Nếp nhà", "Truyền thống"]
        },
        {
          id: "chuc-tet-xom-gieng",
          name: "Thăm Hỏi Họ Hàng & Xóm Giềng",
          icon: "🤝",
          image: "assets/images/hoa_mai.jpg",
          date: "Mùng 1 - Mùng 3",
          meaning: "Thắt chặt tình làng nghĩa xóm, 'tối lửa tắt đèn có nhau' sau một năm mưa nắng nhọc nhằn.",
          description: "Sáng đầu xuân, bà con lối xóm cùng nhau đi chúc Tết từng nhà. Mọi người nhâm nhi chén trà nóng, ăn miếng mứt gừng cay ấm và gửi nhau lời chúc sức khỏe, mùa màng thuận buồm xuôi gió.",
          tags: ["Tình nghĩa", "Cộng đồng"]
        },
        {
          id: "di-le-trung",
          name: "Đi Lễ Chùa Đầu Năm",
          icon: "⛩️",
          image: "assets/images/ong_tao.jpg",
          date: "Đầu năm mới",
          meaning: "Nguyện cầu mưa thuận gió hòa, biển yên sóng lặng cho người thân yêu.",
          description: "Người miền Trung gắn bó mật thiết với biển cả và ruộng đồng, vì vậy chuyến lễ chùa đầu năm luôn mang tâm nguyện chở che bình yên trước thiên tai, cầu mong gia đình dồi dào sức khỏe và thuận lợi.",
          tags: ["Cầu may", "Bình an"]
        }
      ],

      foods: [
        {
          name: "Bánh Tét Miền Trung",
          icon: "🎋",
          image: "assets/images/mam_co_trung.jpg",
          taste: "Chắc nịch, dẻo thơm nếp ngâm kỹ, nhân đỗ xanh thịt mỡ đậm đà tiêu giã",
          meaning: "Đòn bánh tròn dài tượng trưng cho sự sinh sôi, gắn kết bền bỉ và bao bọc chở che.",
          description: "Bánh tét miền Trung được gói rất chặt tay bằng lá chuối chát hoặc lá chuối sứ. Đòn bánh luộc kỹ, khi cắt khoanh tròn bằng chỉ sợi mỏng, miếng bánh vuông tròn đẹp mắt, ăn cùng dưa món đậm vị thơm lừng."
        },
        {
          name: "Dưa Món Miền Trung",
          icon: "🥕",
          image: "assets/images/mam_co_trung.jpg",
          taste: "Giòn sần sật, mặn ngọt chua cay hài hòa thơm nồng vị nước mắm ngon",
          meaning: "Biểu trưng cho sự kiên trì, chắt chiu, tích lũy tinh hoa của đất trời dải đất miền Trung.",
          description: "Cà rốt, củ cải, đu đủ, su hào được tỉa hoa tinh xảo, phơi khô dưới nắng giòn rồi ngâm vào nước mắm đường thắng sánh kẹo. Vị giòn rụm đậm đà của dưa món khi ăn kèm bánh tét là linh hồn của mâm cỗ Tết miền Trung."
        },
        {
          name: "Thịt Ngâm Nước Mắm",
          icon: "🥩",
          image: "assets/images/mam_co_trung.jpg",
          taste: "Thịt mỡ trong veo giòn dai, bì dẻo quánh ngấm nước mắm nhĩ mặn ngọt thơm lừng",
          meaning: "Thể hiện sự sung túc, sung mãn và bàn tay khéo léo của người nội trợ miền Trung.",
          description: "Thịt ba chỉ rút sườn được luộc chín tới rồi ngâm vào keo thủy tinh chứa nước mắm đường thơm lừng ớt tỏi tiêu hạt. Sau vài ngày, thịt trong lại, thái mỏng cuốn bánh tráng kèm rau sống và dưa chua ngon khó cưỡng."
        },
        {
          name: "Tré Bình Định / Tré Huế",
          icon: "🌾",
          image: "assets/images/mam_co_trung.jpg",
          taste: "Chua nhẹ, cay nồng riềng tỏi mè rang, giòn dai của tai heo và thịt đầu",
          meaning: "Biểu trưng cho sự sum vầy, kết đoàn như hình ảnh bó rơm thơm bọc ngoài cây tré.",
          description: "Món khai vị trứ danh bọc trong bó rơm rạ khô mộc mạc. Mở bó rơm ra là hương thơm quyến rũ của riềng non băm nhỏ, tỏi cay và thính gạo. Tré ăn cùng tỏi ngâm chua và tương ớt làm say lòng mọi vị khách đến chúc xuân."
        },
        {
          name: "Mứt Gừng Kim Long",
          icon: "🫚",
          image: "assets/images/mam_co_trung.jpg",
          taste: "Cay ấm nồng nàn, ngọt thanh đường phèn, thơm lừng vị gừng củ già",
          meaning: "Giữ ấm thân thể trước gió lạnh, xua tan khí độc và mang ý nghĩa tình cảm vợ chồng thắm thiết 'gừng cay muối mặn'.",
          description: "Gừng củ xứ Huế nổi tiếng cay nồng được xắt lát mỏng đều tăm tắp, sên với đường cát trắng tinh. Đĩa mứt gừng vàng ươm bên chén trà sen nghi ngút khói là nét thanh tao rất riêng của ngày Tết Cố Đô."
        }
      ],

      taboos: [
        {
          rule: "Kiêng nói lời xui xẻo, đau buồn",
          reason: "Người miền Trung quan niệm đầu năm nói lời không vui sẽ mang điềm gở cho cả năm, chuộng những câu chúc may mắn, hiền hòa.",
          severity: "Rất quan trọng"
        },
        {
          rule: "Tránh làm đổ vỡ đồ đạc, bát đĩa",
          reason: "Tượng trưng cho sự chia ly, đổ vỡ hòa khí trong gia đình, cần sự cẩn trọng nhẹ nhàng.",
          severity: "Quan trọng"
        },
        {
          rule: "Kiêng xảy ra cãi vã, to tiếng, tranh chấp",
          reason: "Ngày đầu năm cần sự dĩ hòa vi quý, nhường nhịn nhau để giữ trọn vẹn vượng khí và tình thân ấm êm.",
          severity: "Tối kỵ"
        },
        {
          rule: "Kiêng ăn cá mè, thịt vịt, thịt chó đầu tháng",
          reason: "Những món ăn này dân gian cho là mang tính 'hãm tài' hoặc nặng nề xui xẻo, không thích hợp cho những ngày đầu năm đón vận may.",
          severity: "Tập tục dân gian"
        },
        {
          rule: "Tránh cho lửa, cho mắm đầu năm",
          reason: "Nước mắm là 'vị đậm đà' của căn bếp gia đình, cho đi mắm muối đầu năm được cho là mất lộc làm ăn.",
          severity: "Thói quen truyền thống"
        }
      ]
    },

    nam: {
      id: "nam",
      name: "Miền Nam",
      title: "Tết Miền Nam - Rực Rỡ Mai Vàng & Phóng Khoáng Nồng Hậu",
      flower: "Hoa Mai Vàng Phú Quý",
      flowerIcon: "🏵️",
      climate: "Nắng vàng rực rỡ, trời trong xanh ấm áp chan hòa",
      color: "#FBC02D",
      bgGradient: "linear-gradient(135deg, #A16207 0%, #CA8A04 100%)",
      description: "Tết miền Nam mang tính cách phóng khoáng, cởi mở, vui tươi và tràn đầy sinh khí như chính miền đất trù phú phương Nam. Cành mai vàng khoe sắc dưới nắng ấm, nồi thịt kho hột vịt thơm nức cùng ước nguyện 'Cầu - Dừa - Đủ - Xoài' tạo nên một mùa xuân ngập tràn hy vọng.",
      bannerImage: "assets/images/mam_co_nam.jpg",
      greeting: "Vạn Sự Như Ý - Tấn Tài Tấn Lộc - Cát Tường Như Nguyện",

      customs: [
        {
          id: "trung-mai-nam",
          name: "Chưng Cành Mai Vàng",
          icon: "🏵️",
          image: "assets/images/hoa_mai.jpg",
          date: "Trước Tết đến rằm tháng Giêng",
          meaning: "Màu vàng hoàng kim tượng trưng cho sự giàu sang, thịnh vượng, phú quý và hy vọng rạng rỡ.",
          description: "Mỗi gia đình miền Nam đều chọn một chậu mai hoặc cành mai thật đẹp để chưng giữa nhà. Người ta tin rằng nếu hoa mai nở rộ đúng vào khoảnh khắc mùng Một Tết và có hoa 7 cánh thì gia đình sẽ đại phát tài lộc suốt năm.",
          tags: ["Phú quý", "Tài lộc"]
        },
        {
          id: "mam-ngu-qua-nam",
          name: "Mâm Ngũ Quả 'Cầu Vừa Đủ Xài'",
          icon: "🥭",
          image: "assets/images/mam_co_nam.jpg",
          date: "30 tháng Chạp",
          meaning: "Mong ước cuộc sống bình dị: Cầu (Mãng cầu) - Vừa (Dừa) - Đủ (Đu đủ) - Xài (Xoài) và Sung (Sung túc).",
          description: "Cách chọn quả độc đáo theo lối chơi chữ Nam Bộ thể hiện mong ước khiêm nhường nhưng thiết thực. Người Nam đặc biệt kiêng kỵ chuối (vì sợ 'chúi nhủi', đi xuống) và kiêng cam, quýt (vì sợ 'quýt làm cam chịu').",
          tags: ["Ý niệm", "Văn hóa"]
        },
        {
          id: "li-xi-nam",
          name: "Lì Xì & Chúc Tết Rộn Ràng",
          icon: "🧧",
          image: "assets/images/hoa_mai.jpg",
          date: "Mùng 1 - Mùng 5",
          meaning: "Gửi trao lộc xuân may mắn, xởi lởi, cầu chúc một năm mới vui tươi phấn khởi.",
          description: "Không khí chúc Tết ở Nam Bộ vô cùng cởi mở, rộn rã tiếng cười đùa. Khách đến nhà dù quen hay lạ đều được gia chủ mời vào nâng chén rượu xuân, thưởng thức bánh mứt và trao phong bao đỏ may mắn.",
          tags: ["Phóng khoáng", "Niềm vui"]
        },
        {
          id: "du-xuan-nam",
          name: "Du Xuân & Hội Hoa Đường Phố",
          icon: "🌸",
          image: "assets/images/hoa_mai.jpg",
          date: "Những ngày đầu năm",
          meaning: "Tận hưởng ánh nắng vàng ấm áp phương Nam, thưởng ngoạn sắc hoa rực rỡ và ghi lại khoảnh khắc gia đình.",
          description: "Người miền Nam rất thích diện áo dài cách tân đi dạo đường hoa (như đường hoa Nguyễn Huệ), bến Bình Đông hay các khu chợ hoa sầm uất trên bến dưới thuyền, cảm nhận trọn vẹn nhịp sống tươi vui mùa xuân.",
          tags: ["Du xuân", "Hiện đại"]
        }
      ],

      foods: [
        {
          name: "Thịt Kho Tàu (Thịt Kho Trứng Nước Dừa)",
          icon: "🍲",
          image: "assets/images/mam_co_nam.jpg",
          taste: "Béo ngậy mềm rục tan trong miệng, đậm đà nước dừa ngọt thanh cánh gián",
          meaning: "Miếng thịt vuông vắn cùng quả trứng tròn trịa tượng trưng cho âm dương hòa hợp, vuông tròn trọn vẹn.",
          description: "Nồi thịt kho tàu là 'linh hồn' của căn bếp Tết Nam Bộ. Thịt ba rọi được kho liu riu cùng trứng vịt trong nước dừa xiêm cho đến khi bì thịt trong veo, mềm như tan chảy. Nồi thịt kho càng đun lại càng thấm đượm vị thơm ngậy."
        },
        {
          name: "Canh Khổ Qua Nhồi Thịt",
          icon: "🥣",
          image: "assets/images/mam_co_nam.jpg",
          taste: "Vị đắng thanh đặc trưng, hậu vị ngọt sâu từ nước hầm xương và nhân thịt băm",
          meaning: "Ước nguyện giản dị mà sâu sắc: mong mọi nỗi cơ cực, 'khổ' nạn năm cũ sẽ 'qua' hết để đón năm mới may mắn.",
          description: "Từng trái khổ qua xanh mướt được khéo léo móc ruột, dồn đẫm nhân thịt nạc băm trộn mộc nhĩ hành hoa, nấu trong nước dùng trong vắt ngọt thanh. Vị đắng lúc đầu hóa thành vị ngọt dịu về sau, thanh mát giải nhiệt tuyệt vời."
        },
        {
          name: "Bánh Tét Miền Nam",
          icon: "🎋",
          image: "assets/images/mam_co_nam.jpg",
          taste: "Nếp dẻo béo nước cốt dừa, nhân thịt mỡ lạp xưởng trứng muối hoặc nhân chuối thơm ngọt",
          meaning: "Tượng trưng cho sự màu mỡ, no ấm, sung túc của dải đất phù sa trĩu hạt.",
          description: "Khác với miền Trung, bánh tét miền Nam thường trộn nếp với nước cốt dừa béo ngậy, đôi khi nhuộm màu xanh lá dứa, màu tím lá cẩm rực rỡ. Nhân bánh đa dạng từ nhân mặn thập cẩm đến nhân ngọt chuối sứ thơm lừng."
        },
        {
          name: "Củ Kiệu Chua Ngọt & Tôm Khô",
          icon: "🧅",
          image: "assets/images/mam_co_nam.jpg",
          taste: "Chua ngọt giòn sần sật quyện vị dai ngọt đậm đà của tôm khô thượng hạng",
          meaning: "Biểu trưng cho tiền tài, lộc lá và sự kết hợp hoàn hảo của phong vị đồng bằng.",
          description: "Củ kiệu trắng tinh ngâm giấm đường chua ngọt thanh thoát, ăn cùng tôm khô đỏ au rưới thêm chút đường cát hoặc ăn kèm bánh tét. Đây là món mồi nhậu và món giải ngấy số một trong ngày Tết phương Nam."
        },
        {
          name: "Dưa Giá Hẹ",
          icon: "🥗",
          image: "assets/images/mam_co_nam.jpg",
          taste: "Giòn tan, chua thanh mát lành, thơm mùi lá hẹ và ớt sừng",
          meaning: "Biểu thị sự sinh sôi nảy nở nhanh chóng và tươi mới như mầm giá.",
          description: "Giá đỗ mập trắng trộn với hẹ cắt khúc, cà rốt thái sợi và ớt sừng ngâm nước giấm muối lên men trong ngày. Đĩa dưa giá ăn kèm thịt kho tàu là 'bộ đôi hoàn hảo' không thể thiếu trên mâm cơm ngày Tết."
        }
      ],

      taboos: [
        {
          rule: "Kiêng quét nhà hốt rác ngày Mùng Một",
          reason: "Tương tự miền Bắc, người Nam kiêng quét rác ra khỏi cửa vì sợ 'quét luôn Thần Tài' và đuổi tiền tài đi mất.",
          severity: "Rất quan trọng"
        },
        {
          rule: "Tránh làm rơi vỡ đồ đạc chén dĩa",
          reason: "Đổ vỡ là biểu hiện của chia cắt, xui rủi, thất thoát tài lộc trong năm mới.",
          severity: "Quan trọng"
        },
        {
          rule: "Kiêng để cối xay gạo trống không",
          reason: "Bắt nguồn từ tập quán nông nghiệp, cối xay trống tượng trưng cho sự thất bát, đói kém, gia đạo cần đủ đầy no ấm.",
          severity: "Tập tục Nam Bộ"
        },
        {
          rule: "Kiêng cúng chuối, cam, lê, táo trên mâm ngũ quả",
          reason: "Chuối đọc chệch thành 'chúi nhủi', cam sợ 'cam chịu', lê sợ 'lê lết', táo sợ 'bom đạn thất bát'.",
          severity: "Đặc trưng mâm ngũ quả"
        },
        {
          rule: "Hạn chế tranh cãi, nói điều gở",
          reason: "Người Nam thích sự vui vẻ, xởi lởi đầu năm để 'cả năm tươi cười', kỵ người nặng vía hay quạu quọ.",
          severity: "Văn hóa lối sống"
        }
      ]
    }
  },

  // DANH SÁCH TẤT CẢ THẺ PHONG TỤC (DÙNG CHO BỘ LỌC VÀ GALLERY)
  allCustoms: [
    {
      id: "cust-1",
      name: "Cúng Ông Công Ông Táo",
      region: "Miền Bắc & Toàn Quốc",
      regionId: "bac",
      category: "custom",
      icon: "🐟",
      image: "assets/images/ong_tao.jpg",
      meaning: "Bày tỏ lòng biết ơn thần Bếp, tiễn ngài về trời báo cáo và cầu một năm mới no ấm bình yên.",
      quote: "23 tháng Chạp tiễn Táo quân - Khói hương trầm ấm đón nàng xuân.",
      desc: "Cúng ông Công ông Táo là nét văn hóa tâm linh khởi đầu cho chuỗi ngày đón Tết. Mâm cỗ tiễn Táo quân gồm hoa quả, mũ hia và cá chép đỏ phóng sinh để cá hóa rồng cưỡi về thiên đình."
    },
    {
      id: "cust-2",
      name: "Gói Bánh Chưng Xanh",
      region: "Miền Bắc (Đặc trưng)",
      regionId: "bac",
      category: "custom",
      icon: "🎋",
      image: "assets/images/banh_chung.jpg",
      meaning: "Thể hiện tấm lòng biết ơn đất trời, tổ tiên và gắn kết các thế hệ quây quần bên bếp lửa hồng.",
      quote: "Bánh chưng vuông vức tình non nước - Nếp dẻo thơm nồng vị tổ tiên.",
      desc: "Bánh chưng là món ăn truyền thống tiêu biểu của Tết miền Bắc, thể hiện lòng biết ơn đối với tổ tiên và đất trời. Những ngày cuối năm quây quần bên nồi bánh sôi sùng sục là ký ức thiêng liêng khó phai."
    },
    {
      id: "cust-3",
      name: "Chưng Hoa Mai Vàng Rực Rỡ",
      region: "Miền Nam",
      regionId: "nam",
      category: "custom",
      icon: "🏵️",
      image: "assets/images/hoa_mai.jpg",
      meaning: "Tượng trưng cho sự giàu sang phú quý, may mắn cát tường và hy vọng tương lai bừng sáng.",
      quote: "Mai vàng khoe sắc thắm phương Nam - Nở rộ tài vinh rạng lối mòn.",
      desc: "Sắc mai vàng óng ả dưới ánh nắng phương Nam là biểu tượng không thể thiếu của Tết miền Nam. Cành mai bung nở rực rỡ đúng sáng mùng Một mang đến niềm tin gia chủ sẽ có một năm mới đại cát đại lợi."
    },
    {
      id: "cust-4",
      name: "Chưng Hoa Đào Bích & Đào Phai",
      region: "Miền Bắc",
      regionId: "bac",
      category: "custom",
      icon: "🌸",
      image: "assets/images/hoa_dao.jpg",
      meaning: "Xua đuổi tà khí, mang lại sinh khí dồi dào, sự may mắn, khởi sắc và duyên lành đầu năm.",
      quote: "Sắc đào e ấp trong mưa bụi - Đón Tết thanh tao chốn Tràng An.",
      desc: "Cành đào Nhật Tân với sắc hồng thắm duyên dáng nở giữa làn mưa phùn se lạnh là linh hồn mùa xuân phương Bắc. Hoa đào không chỉ làm đẹp không gian mà còn là biểu tượng chở che, đem lại an lành cho gia đạo."
    },
    {
      id: "cust-5",
      name: "Bày Mâm Cỗ Tết Miền Trung",
      region: "Miền Trung",
      regionId: "trung",
      category: "custom",
      icon: "🕯️",
      image: "assets/images/mam_co_trung.jpg",
      meaning: "Tri ân tiền nhân, gìn giữ nếp nhà chu đáo và thể hiện sự khéo léo chắt chiu của phụ nữ xứ miền Trung.",
      quote: "Mâm cỗ thơm lừng dưa món tré - Đượm tình xứ sở dạ khôn nguôi.",
      desc: "Mâm cỗ Tết miền Trung là bức tranh văn hóa ẩm thực tinh tế, kết hợp giữa bánh tét dẻo quánh, dưa món mặn ngọt, thịt ngâm mắm và cây tré rơm mộc mạc, thể hiện sự thành kính sâu xa với gia tiên."
    },
    {
      id: "cust-6",
      name: "Nồi Thịt Kho Tàu & Canh Khổ Qua",
      region: "Miền Nam",
      regionId: "nam",
      category: "custom",
      icon: "🍲",
      image: "assets/images/mam_co_nam.jpg",
      meaning: "Nguyện cầu âm dương hòa hợp, vuông tròn viên mãn và mọi nỗi khổ ải của năm cũ đều trôi qua.",
      quote: "Khổ qua nhồi thịt sầu tan biến - Trứng tròn thịt béo phúc dồi dào.",
      desc: "Nồi thịt kho trứng vịt nước dừa óng ánh sắc cánh gián cùng bát canh khổ qua thanh nhiệt là mâm cơm sum vầy ấm cúng của mỗi nhà người Nam, gửi gắm ước mơ về một năm mới trọn vẹn, thanh thản."
    },
    {
      id: "cust-7",
      name: "Mừng Tuổi Trao Phong Bao Lì Xì",
      region: "Ba Miền Toàn Quốc",
      regionId: "all",
      category: "custom",
      icon: "🧧",
      image: "assets/images/hoa_mai.jpg",
      meaning: "Trao gửi lời chúc may mắn, chúc thọ người già và mừng tuổi các cháu nhỏ mau lớn, chăm ngoan.",
      quote: "Bao đỏ trao tay trao vận tốt - Nụ cười rạng rỡ đón xuân tươi.",
      desc: "Phong bao lì xì đỏ thắm mang theo hy vọng may mắn, tài lộc và hạnh phúc. Ý nghĩa chính của phong tục này không nằm ở giá trị tiền tệ mà ở tình yêu thương và lời chúc tốt lành khởi đầu năm mới."
    },
    {
      id: "cust-8",
      name: "Xông Đất Đầu Năm",
      region: "Miền Bắc & Miền Trung",
      regionId: "bac",
      category: "custom",
      icon: "🚪",
      image: "assets/images/banh_chung.jpg",
      meaning: "Người đầu tiên bước vào nhà mang vận khí, tài lộc quyết định sự may mắn của gia chủ suốt cả năm.",
      quote: "Đầu năm mở cửa rước người sang - Phúc lộc theo về rạng xóm làng.",
      desc: "Tục xông đất (hoặc đạp đất) được tiến hành ngay sau thời khắc giao thừa. Người được chọn xông đất thường có tính tình vui vẻ, hòa nhã, có công việc thuận lợi và hợp tuổi với chủ nhà."
    },
    {
      id: "cust-9",
      name: "Đi Lễ Chùa & Hái Lộc Cầu An",
      region: "Ba Miền Toàn Quốc",
      regionId: "all",
      category: "custom",
      icon: "⛩️",
      image: "assets/images/ong_tao.jpg",
      meaning: "Tìm về chốn tâm linh thanh tịnh, cầu bình an, may mắn và gột rửa những muộn phiền năm cũ.",
      quote: "Khói hương nghi ngút nơi cửa Phật - Lòng nhẹ thênh thang giữa đất trời.",
      desc: "Đầu xuân, mọi người cùng gia đình vãn cảnh chùa, thành tâm lễ Phật. Tiếng chuông chùa ngân nga xua tan âu lo, tiếp thêm nguồn năng lượng an lạc và hướng thiện cho cả một năm mới."
    }
  ],

  // BẢNG SO SÁNH BA MIỀN TOÀN DIỆN
  comparison: [
    {
      category: "Hoa Tết biểu trưng",
      icon: "🌸",
      bac: "Hoa đào (Bích đào thắm, Đào phai Nhật Tân e ấp)",
      trung: "Đào, mai vàng và cúc vạn thọ tươi tắn",
      nam: "Hoa mai vàng rực rỡ tượng trưng cho phú quý",
      insight: "Miền Bắc gắn với hoa đào do khí hậu lạnh; miền Nam rực rỡ sắc mai nhờ nắng ấm quanh năm."
    },
    {
      category: "Món bánh truyền thống",
      icon: "🫔",
      bac: "Bánh chưng vuông gói lá dong, nếp trắng đỗ vàng",
      trung: "Bánh tét tròn dài gói lá chuối chặt nạc",
      nam: "Bánh tét nếp cốt dừa thơm béo (nhân mặn & ngọt)",
      insight: "Bánh chưng hình vuông tượng trưng cho Đất; Bánh tét hình trụ dài tượng trưng cho sự gắn bó, sinh sôi."
    },
    {
      category: "Món ăn đặc trưng nhất",
      icon: "🍲",
      bac: "Thịt đông mềm mát ăn kèm dưa hành muối giòn",
      trung: "Thịt ngâm nước mắm dẻo quánh, dưa món đậm vị",
      nam: "Thịt kho tàu trứng vịt nước dừa xiêm béo ngậy",
      insight: "Món ăn phản ánh điều kiện tự nhiên: Bắc lạnh có thịt đông, Trung mưa bão trữ thịt mắm, Nam sẵn dừa ngọt kho thịt."
    },
    {
      category: "Món canh ngày Tết",
      icon: "🥣",
      bac: "Canh bóng thả, canh măng nấu móng giò đậm đà",
      trung: "Canh giò hầm hạt sen hoặc canh măng chua thanh",
      nam: "Canh khổ qua dồn thịt ('mọi khổ đau sẽ qua')",
      insight: "Người miền Nam chuộng triết lý sống lạc quan: ăn khổ qua để mong mọi điều gian khổ trôi qua đón điều tươi sáng."
    },
    {
      category: "Mâm ngũ quả",
      icon: "🍇",
      bac: "Chuối, bưởi, đào, hồng, quýt (theo ngũ hành)",
      trung: "Mộc mạc: chuối, mãng cầu, xoài, đu đủ, thanh long",
      nam: "Cầu, Dừa, Đủ, Xoài, Sung ('Cầu vừa đủ xài')",
      insight: "Miền Bắc coi trọng nải chuối ngửa bàn tay nâng đỡ; miền Nam kiêng chuối (sợ chúi nhủi) và kiêng cam (sợ cam chịu)."
    },
    {
      category: "Thời tiết & Khí hậu",
      icon: "🌤️",
      bac: "Se lạnh, gió bấc nhẹ, mưa phùn lất phất đặc trưng",
      trung: "Tiết trời dịu mát, nắng nhẹ hanh vàng dễ chịu",
      nam: "Nắng vàng rực rỡ, trời xanh ấm áp rạng ngời",
      insight: "Khí hậu tạo nên cách ăn mặc và phong cách đón Tết: người Bắc quây quần bên bếp lửa, người Nam du xuân áo cộc."
    },
    {
      category: "Phong tục chúc Tết",
      icon: "🎋",
      bac: "Trang trọng, tôn nghiêm ('Mùng một Tết cha...')",
      trung: "Đậm nghĩa tình làng xóm, kính cẩn gia tiên chu đáo",
      nam: "Phóng khoáng, cởi mở, xôm tụ tiếng cười đùa",
      insight: "Dù cách biểu đạt khác nhau, tấm lòng kính trên nhường dưới và chúc phúc đầu xuân đều vẹn nguyên."
    },
    {
      category: "Điều kiêng kỵ tiêu biểu",
      icon: "🚫",
      bac: "Kiêng quét nhà ngày mùng 1, kiêng mặc đồ đen trắng",
      trung: "Kiêng làm vỡ đồ, kiêng cãi vã, kiêng ăn cá mè đầu năm",
      nam: "Kiêng để cối xay gạo trống, kiêng cúng chuối cam",
      insight: "Tất cả điều kiêng kỵ đều bắt nguồn từ mong ước một năm mới thuận buồm xuôi gió, bình an cát tường."
    }
  ],

  // BỐC QUẺ LÌ XÌ ĐẦU NĂM (LUCKY DRAW)
  luckyEnvelopes: [
    {
      id: 1,
      title: "Quẻ Đại Cát - Vạn Sự Hanh Thông",
      luckyNum: 88,
      verse: "Xuân đáo hoa khai tài lộc mãn - Niên lai phúc thọ vạn niên khang",
      wish: "Năm mới chúc bạn công danh rạng rỡ, việc học tập và sự nghiệp thăng hoa, mọi dự định đều thành hiện thực rực rỡ!",
      giftIcon: "⭐"
    },
    {
      id: 2,
      title: "Quẻ Bình An - Gia Đạo Thuận Hòa",
      luckyNum: 68,
      verse: "Tâm bình thế giới thanh bình - Gia hòa vạn sự khang ninh cát tường",
      wish: "Chúc gia đình bạn luôn tràn ngập tiếng cười, cha mẹ an khang, các thế hệ yêu thương gắn bó khăng khít bền lâu!",
      giftIcon: "🕊️"
    },
    {
      id: 3,
      title: "Quẻ Tấn Tài - Tiền Bạc Rủng Rỉnh",
      luckyNum: 99,
      verse: "Tiền vào như nước sông Đà - Tiền ra nhỏ giọt như cà phê phin",
      wish: "Chúc bạn một năm tài chính rủng rỉnh, mua may bán đắt, mở rộng cơ hội kiếm tiền và tích lũy được nhiều tài sản!",
      giftIcon: "💰"
    },
    {
      id: 4,
      title: "Quẻ Đăng Khoa - Trí Tuệ Sáng Ngời",
      luckyNum: 79,
      verse: "Sách đèn tôi luyện ngàn ngày - Một mai chạm đỉnh vinh quang sáng ngời",
      wish: "Chúc bạn đạt kết quả học tập xuất sắc, thi đâu đỗ đó, tư duy sắc bén và gặt hái nhiều bằng khen, chứng chỉ quý giá!",
      giftIcon: "📚"
    },
    {
      id: 5,
      title: "Quẻ Tình Duyên - Ý Hợp Tâm Đầu",
      luckyNum: 26,
      verse: "Xuân sang hoa thắm cành đào - Người thương gõ cửa duyên lành nở hoa",
      wish: "Nếu bạn độc thân sẽ sớm gặp tri kỷ tâm đầu ý hợp; nếu đã có người thương thì tình cảm thêm sâu sắc bền chặt!",
      giftIcon: "💖"
    },
    {
      id: 6,
      title: "Quẻ Trường Thọ - Sức Khỏe Dồi Dào",
      luckyNum: 39,
      verse: "Khỏe khoắn như rồng tung cánh lượn - Dẻo dai vững bước khắp muôn phương",
      wish: "Chúc bạn thân thể cường tráng, tinh thần sảng khoái, không bệnh tật muộn phiền, năng lượng dồi dào mỗi ngày!",
      giftIcon: "🌿"
    }
  ],

  // TRẮC NGHIỆM TẾT: BẠN HỢP VỚI TẾT MIỀN NÀO?
  quizQuestions: [
    {
      id: 1,
      question: "Thời tiết lý tưởng nhất cho bạn vào kỳ nghỉ Tết là gì?",
      options: [
        { text: "Lạnh buốt, quàng khăn len, ngắm mưa phùn lất phất", region: "bac" },
        { text: "Dịu mát, gió thoang thoảng, khí trời trong trẻo mộc mạc", region: "trung" },
        { text: "Nắng vàng rực rỡ, diện áo cộc hoặc áo dài cách tân mát mẻ", region: "nam" }
      ]
    },
    {
      id: 2,
      question: "Món ăn Tết nào làm bạn muốn thưởng thức ngay tức khắc?",
      options: [
        { text: "Bánh chưng rán giòn chấm tương ớt ăn cùng dưa hành", region: "bac" },
        { text: "Bánh tét dẻo ăn kèm dưa món mặn giòn, thịt ngâm mắm", region: "trung" },
        { text: "Thịt kho hột vịt nước dừa béo ngậy kèm củ kiệu tôm khô", region: "nam" }
      ]
    },
    {
      id: 3,
      question: "Loài hoa Tết nào chạm vào trái tim bạn nhiều nhất?",
      options: [
        { text: "Hoa đào phai Nhật Tân e ấp duyên dáng giữa cái lạnh", region: "bac" },
        { text: "Hoa cúc vạn thọ vàng ươm hoặc nhánh đào mai giao hòa", region: "trung" },
        { text: "Chậu mai vàng rực rỡ nở bừng bừng dưới ánh nắng xuân", region: "nam" }
      ]
    },
    {
      id: 4,
      question: "Phong cách đón Tết yêu thích nhất của bạn là gì?",
      options: [
        { text: "Trang trọng, chu đáo theo truyền thống, thức thâu đêm canh nồi bánh chưng", region: "bac" },
        { text: "Trầm lắng, thành kính dâng hương gia tiên, thăm hỏi thắt chặt nghĩa xóm", region: "trung" },
        { text: "Xôm tụ, xởi lởi, vi vu du xuân hội hoa và giao lưu bạn bè rộn rã", region: "nam" }
      ]
    }
  ]
};

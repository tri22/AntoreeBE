import { Profile } from "./entities/profile.entity";

export const profileList: Profile[] = [
    {
        id: 1,
        teacherId: 1,
        price: 200,
        title: "Xin chào các bạn học viên! Tôi là Tran Thi Binh, giáo viên tiếng Anh online với niềm đam mê giúp mọi người tự tin giao tiếp bằng tiếng Anh.",
        description: "Lớp học của tôi luôn thân thiện, thoải mái và vui vẻ. Tôi tin rằng học tiếng Anh không chỉ là học ngữ pháp hay từ vựng, mà quan trọng là dám nói, dám sai và dần tiến bộ.\n\nNếu bạn đang tìm một người đồng hành để học tiếng Anh hiệu quả và thú vị hơn, tôi rất vui được cùng bạn bắt đầu hành trình này!",
        levels: ["IELTS", "TOEIC", "TOEFL", "Cambridge"],
        teachTime: "19h - 21h",
        teachDay: "Thứ hai, Thứ 3, Chủ Nhật",

    },
    {
        id: 2,
        teacherId: 2,
        price: 250,
        title: "Xin chào! Tôi là Nhiên Nguyễn Ngọc, giáo viên tiếng Anh giao tiếp cơ bản và nâng cao.",
        description: "Tôi tập trung vào việc xây dựng nền tảng vững chắc cho người mới bắt đầu, đặc biệt chú trọng phát âm và phản xạ trong giao tiếp hàng ngày.",
        levels: ["A1", "A2"],
        teachTime: "18h - 20h",
        teachDay: "Thứ ba, Thứ năm",
         
    },
    {
        id: 3,
        teacherId: 3,
        price: 220,
        title: "Xin chào! Tôi là Thị Hiến Trần, giáo viên tiếng Anh với 5 năm kinh nghiệm.",
        description: "Tôi giúp học viên nắm vững kỹ năng nghe, nói, đọc, viết. Đặc biệt, tôi có phương pháp riêng để nâng cao khả năng giao tiếp trong môi trường học thuật và công việc.",
        levels: ["B1", "B2"],
        teachTime: "20h - 22h",
        teachDay: "Thứ tư, Thứ sáu",
         
    },
    {
        id: 4,
        teacherId: 4,
        price: 300,
        title: "Xin chào! Tôi là Huong Nguyen Thanh, giáo viên tiếng Anh nâng cao.",
        description: "Tôi chuyên đào tạo học viên chuẩn bị cho các kỳ thi quốc tế, tập trung vào kỹ năng viết học thuật và giao tiếp chuyên nghiệp.",
        levels: ["C1", "C2"],
        teachTime: "19h - 21h",
        teachDay: "Thứ hai, Thứ năm",
         
    },
    {
        id: 5,
        teacherId: 5,
        price: 280,
        title: "Xin chào! Tôi là Mrs. Regina Ferreras, giáo viên tiếng Anh quốc tế.",
        description: "Với hơn 10 năm kinh nghiệm, tôi tập trung vào việc luyện thi IELTS, TOEFL, TOEIC và Cambridge English cho mọi lứa tuổi.",
        levels: ["IELTS", "TOEIC", "TOEFL", "Cambridge"],
        teachTime: "17h - 19h",
        teachDay: "Thứ tư, Thứ bảy",
        
    },
    {
        id: 6,
        teacherId: 6,
        price: 260,
        title: "Xin chào! Tôi là Trần Văn Giang, giáo viên tiếng Anh giao tiếp chuyên sâu.",
        description: "Tôi hướng dẫn học viên kỹ năng phản xạ nhanh và tự tin khi giao tiếp với người nước ngoài.",
        levels: ["IELTS", "TOEIC", "TOEFL", "Cambridge English"],
        teachTime: "18h30 - 20h",
        teachDay: "Thứ hai, Thứ sáu",
         
    },
    {
        id: 7,
        teacherId: 7,
        price: 240,
        title: "Xin chào! Tôi là Lê Thị Hoa, giáo viên tiếng Anh cho trẻ em.",
        description: "Tôi có nhiều năm kinh nghiệm giảng dạy trẻ em từ 6 - 12 tuổi, sử dụng phương pháp học qua trò chơi và hình ảnh sinh động.",
        levels: ["IELTS", "TOEIC", "TOEFL", "Cambridge English"],
        teachTime: "16h - 18h",
        teachDay: "Thứ bảy, Chủ nhật",
         
    },
    {
        id: 8,
        teacherId: 8,
        price: 270,
        title: "Xin chào! Tôi là Phạm Văn Đạt, giáo viên luyện thi tiếng Anh.",
        description: "Tôi giúp học viên luyện tập các dạng đề thi TOEIC, IELTS với phương pháp hiệu quả và nhiều mẹo làm bài.",
        levels: ["TOEIC", "IELTS"],
        teachTime: "19h - 21h",
        teachDay: "Thứ ba, Thứ năm",
         
    },
    {
        id: 9,
        teacherId: 9,
        price: 230,
        title: "Xin chào! Tôi là Hoàng Thị Trúc, giáo viên tiếng Anh du học.",
        description: "Tôi chuyên hỗ trợ học viên chuẩn bị hồ sơ du học, luyện thi IELTS/TOEFL và cải thiện kỹ năng giao tiếp học thuật.",
        levels: ["IELTS", "TOEFL"],
        teachTime: "20h - 22h",
        teachDay: "Thứ tư, Chủ nhật",
         
    },
];

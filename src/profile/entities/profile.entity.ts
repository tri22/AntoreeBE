// Định nghĩa Profile
export class Profile {
    id: number;
    teacherId: number;
    price: number;
    title: string;
    description: string;
    teachTime: string;
    teachDay: string;
    levels: string[];  
    
}

// Map level -> logo
export const LevelMap: Record<string, string> = {
    "IELTS": "https://cambridgeinstitute.co.in/wp-content/uploads/2016/03/ielts-logo.jpg",
    "TOEIC": "https://cfl.ctu.edu.vn/images/upload/images/logo-toeic-transparent1.png",
    "TOEFL": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/TOEFL_Logo.svg/1200px-TOEFL_Logo.svg.png",
    "Cambridge": "https://cdn.brandfetch.io/id5pMoXpOp/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1668131168339",
    "A1": "https://sris.edu.kg/wp-content/uploads/2021/10/Language-proficiency-framework-cefr-A1-badge.png",
    "A2": "https://sris.edu.kg/wp-content/uploads/2021/10/Language-proficiency-framework-cefr-A2-badge.png",
    "B1": "https://sris.edu.kg/wp-content/uploads/2021/10/Language-proficiency-framework-cefr-B1-badge.png",
    "B2": "https://sris.edu.kg/wp-content/uploads/2021/10/Language-proficiency-framework-cefr-B2-badge.png",
    "C1": "https://sris.edu.kg/wp-content/uploads/2021/10/Language-proficiency-framework-cefr-C1-badge.png",
    "C2": "https://sris.edu.kg/wp-content/uploads/2021/10/Language-proficiency-framework-cefr-C2-badge.png",
};

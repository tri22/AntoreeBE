import { User } from "./entities/user.entity";

// Tạo 10 teacher sample

export const userList: User[] = [
    // Teachers
    { id: 1, name: 'Tran Thi Binh', email: 'teacher1@example.com', password: '$2b$12$HrkjdLiDxnWjANXEw4qttujiIk2jIqiP1nQVzA0vqCRRIoGMNlMyS', phone: '0912345678', address: 'Ho Chi Minh', rating: 4.5, role: 'teacher', country: 'Vietnam' },
    { id: 2, name: 'Le Van Cuong', email: 'teacher2@example.com', password: '$2b$12$Qe1wz4TE..41W/9QZJo13elSB0jCmxMv3kQihOEZD/HPPwdvLzLPO', phone: '0923456789', address: 'Da Nang', rating: 4.2, role: 'teacher', country: 'Vietnam' },
    { id: 3, name: 'Pham Thi Dung', email: 'teacher3@example.com', password: '$2b$12$qwZ2EUO.sCFzpF5lGzjM2OahH3CcoJ7/S0q6CcVq8X2xkqzxLFKDa', phone: '0934567890', address: 'Hai Phong', rating: 3.8, role: 'teacher', country: 'Vietnam' },
    { id: 4, name: 'Hoang Van Em', email: 'teacher4@example.com', password: '$2b$12$pz4ND59GWJfXHBzXBlm9de6JZcHdf6JQQ4d6U64F0Ub/PcLYeYqve', phone: '0945678901', address: 'Can Tho', rating: 4.7, role: 'teacher', country: 'Vietnam' },
    { id: 5, name: 'Nguyen Thi Thao', email: 'teacher5@example.com', password: '$2b$12$H/eF5kjmIKydQRsHPRo9aup5rt90Ag0ZQACSjKAUad194wh/.PZnK', phone: '0956789012', address: 'Hue', rating: 4.0, role: 'teacher', country: 'Vietnam' },
    { id: 6, name: 'Tran Van Giang', email: 'teacher6@example.com', password: '$2b$12$0PxkBte2AI5ilZXYyzDKV./WPUHcibGPAZyAu7nbA7UQa078PyON6', phone: '0967890123', address: 'Nha Trang', rating: 3.9, role: 'teacher', country: 'Vietnam' },

];
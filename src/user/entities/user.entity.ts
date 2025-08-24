export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    rating:number;
    country: string;
    role: 'admin' | 'teacher' | 'user';
}

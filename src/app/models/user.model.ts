export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    job: string;
    gender: string;
    birthDate: string;
    address: {
        country: string,
        city: string
    };
    isVerified: boolean;
    role: string;
}

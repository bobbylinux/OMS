import { UserInterface } from "../interfaces/user.interface";

export class User implements UserInterface {
    id: number;
    name: string;
    lastName: string;
    fiscalCode: string;
    email: string;
    province: string;
    phone: string;
    age: number;

    constructor() {
        this.id = 0;
        this.name = null;
        this.lastName = null;
        this.fiscalCode = null;
        this.email = null;
        this.province = null;
        this.age = 0;
        this.phone = null;
    }
}
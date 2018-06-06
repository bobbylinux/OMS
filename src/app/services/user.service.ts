import { User } from './../classes/user';
import { UserInterface } from '../interfaces/user.interface';

export class UserService {
    private users: User[] = [
        {   
            id: 1,
            name: "Roberto",
            lastName: "Bani",
            fiscalCode: "BNARRT83L26D612V",
            email: "roberto.bani@gmail.com",
            province: "Firenze",
            phone: "3492906672",
            age: 34
        },
        {
            id: 2,
            name: "Sandra",
            lastName: "Felex",
            fiscalCode: "BNARRT83L26D612V",
            email: "roberto.bani@gmail.com",
            province: "Firenze",
            phone: "3492906672",
            age: 35

        },
        {
            id: 3,
            name: "Alfiero",
            lastName: "Bani",
            fiscalCode: "BNARRT83L26D612V",
            email: "roberto.bani@gmail.com",
            province: "Firenze",
            phone: "3492906672",
            age: 71
        }
    ];
    constructor() {
    }

    getUsers() {
        return this.users;
    }

    deleteUser(user){
        let index = this.users.indexOf(user);
        if (index >=0) {
            this.users.splice(index,1);
        }
    }

    updateUser(user: UserInterface) {
        const index = this.users.findIndex((v) => v.id == user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    createUser(user: UserInterface) {
        this.users.splice(0,0,user);
    }
}
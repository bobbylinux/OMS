export class UserService {
    private users = [
        {
            name: "Roberto",
            lastName: "Bani",
            fiscalCode: "BNARRT83L26D612V",
            email: "roberto.bani@gmail.com",
            province: "Firenze",
            phone: "3492906672",
            age: 34
        },
        {
            name: "Sandra",
            lastName: "Felex",
            fiscalCode: "BNARRT83L26D612V",
            email: "roberto.bani@gmail.com",
            province: "Firenze",
            phone: "3492906672",
            age: 35

        },
        {
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
}
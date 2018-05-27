export class UserService {
    
    constructor() {
    }

    getUsers() {
        return [
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
                age: "71"
            }
        ];
    }
}
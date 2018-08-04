import { User } from './../classes/user';
import { UserInterface } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users: User[] = [];
    private API_URL = "http://localhost:8000/users";

    constructor(private httpClient: HttpClient) {
    }

    getUsers() {
        return this.httpClient.get(this.API_URL);
    }

    getUser(id: number) {
        return this.httpClient.get(this.API_URL+"/"+id);
    }

    deleteUser(user: UserInterface){
        const data = {_method: "DELETE"};
        return this.httpClient.post(this.API_URL + '/' + user.id, data);
    }

    updateUser(user: UserInterface) {
        user['_method'] = "PUT";
        return this.httpClient.post(this.API_URL + '/' + user.id, user);
    }

    createUser(user: UserInterface) {
        return this.httpClient.post(this.API_URL, user);
    }
}
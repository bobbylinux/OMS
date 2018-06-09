import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  
  private userCopy: User;
  private __user: User;

  @Input('user') set user(user: User){
    console.log("alert");
    this.__user = user;
    this.userCopy = Object.assign({},user);
  }

  get user() {
    console.log("alert");
    return this.__user;
  }

  
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    
    console.log("alert");
  }

  ngOnInit() {
    
    console.log("alert");
    this.user = new User();
    this.route.params.subscribe(
      (params) => {
        if (!params.id) {
          return;
        }
        this.user = this.userService.getUser(+params.id);
      }
    );
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users']);
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
  
  backToUsers() {
    this.router.navigate(['users']);
  }

}

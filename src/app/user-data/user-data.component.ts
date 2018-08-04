import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  private user: User;
  public title = "User Detail";

  constructor(private routes: ActivatedRoute, private service: UserService, private router : Router) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (p) => {
        this.service.getUser(+p.id).subscribe(
          response => this.user = response['data']
        )
      });

  }

  backToUsers() {
    this.router.navigate(['users']);
  }

}

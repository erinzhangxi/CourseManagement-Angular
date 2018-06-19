import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import { CookieService } from "ngx-cookie-service";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private cookiesService: CookieService,
              private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  userType;

  register(username, password, password2, userType) {
    console.log([username, password, password2, userType]);

    this.service
      .createUser(username, password, userType)
      .then(() =>  this.router.navigate(['profile'])
      );
    const date = new Date();
    const minutes = 30;
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    this.cookiesService.set('username', JSON.stringify(username), date);
  }

  ngOnInit() {
  }

}

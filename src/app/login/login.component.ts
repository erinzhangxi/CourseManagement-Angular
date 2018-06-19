import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cookiesService: CookieService,
              private router: Router,
              private service: UserServiceClient) {}
  username;
  password;
  userType;

  login(username, password, userType) {
    console.log([username, password]);

    this.service
      .login(username, password, userType)
      .then(() =>  this.router.navigate(['profile'])
      );
    const date = new Date();
    const minutes = 30;
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    this.cookiesService.set('username', JSON.stringify(username), date);
    this.cookiesService.set('userType', JSON.stringify(userType), date);
  }

  ngOnInit() {
  }

}

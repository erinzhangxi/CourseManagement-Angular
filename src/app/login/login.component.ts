import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    this.router.navigate(['profile']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    console.log([username, password, password2]);
    this.router.navigate(['profile']);
  }

  ngOnInit() {
  }

}

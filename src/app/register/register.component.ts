import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  username;
  password;
  password2;
  register(username, password, password2) {
    console.log([username, password, password2]);
  }

  ngOnInit() {
  }

}

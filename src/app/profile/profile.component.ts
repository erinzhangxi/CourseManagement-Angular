import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user: User = new User();
  update(user: User) {
    console.log(user);
  }

  ngOnInit() {
  }

}

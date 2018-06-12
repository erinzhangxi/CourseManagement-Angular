import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

  user: User = new User();
  update(user: User) {
    console.log(user);
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);
  }

}

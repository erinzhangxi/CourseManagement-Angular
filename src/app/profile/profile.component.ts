import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private cookiesService: CookieService,
              private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user: User = new User();
  username;
  password;
  sections = [];
  userType;

  update(user) {
    this.service
      .updateUser(user)
      .then((user) => this.user = user);
  }

  testbutton() {
    console.log("BUTTON IS CLICKED");
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.username = this.cookiesService.get('username');
    this.userType = this.cookiesService.get('userType');
    console.log(this.username);

    this.service
      .profile()
      .then(user => this.user = user);

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}

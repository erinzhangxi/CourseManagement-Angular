import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

  isLoggedIn = false;

  ngOnInit() {
    this.checkUserStatus();
  }

  checkUserStatus() {
    this.service.checkUserStatus()
       .then((res) => this.isLoggedIn = res);
    console.log(this.isLoggedIn);
  }


}

import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

  isLoggedIn;

  ngOnInit() {
    console.log(this.isLoggedIn);
    this.isLoggedIn = this.service.checkUserStatus();
    console.log(this.isLoggedIn);
  }

}

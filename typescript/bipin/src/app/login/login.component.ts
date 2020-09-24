import { Component, OnInit } from '@angular/core';
import {User} from './../users/user.model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitting: boolean = false;
user
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.submitting = true;
    console.log('username', this.user.username)
    console.log('password', this.user.password)
    setTimeout(() => {
      this.user.username = 'bipin';
      this.user.password = 'gaire';
    }, 4000)
  }
  callForChange() { };

}

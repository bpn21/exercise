import { Component, OnInit } from '@angular/core';
import { User } from './../users/user.model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitting: boolean = false;
  user
  constructor() {
    this.user = new User({});
  }

  ngOnInit(): void {
  }

  login() {
    this.submitting = true;
    console.log('username', this.user.username)
    console.log('password', this.user.password)
  }
  callForChange() { };

}

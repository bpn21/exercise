import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitting: boolean = false;
  username: String;
  password: String;
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.submitting = true;
    console.log('username', this.username)
    console.log('password', this.password)
    setTimeout(() => {
      this.username = 'bipin';
      this.password = 'gaire';
    }, 4000)
  }
  callForChange() { };

}

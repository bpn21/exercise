import { Component, OnInit } from '@angular/core';
import { User } from './../../users/user.model'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registering: boolean = false;
  user;

  constructor() {

    this.user = new User({});
  }

  ngOnInit(): void {


  }
  registered() {
    this.registering = true
    // console.log("what comes in user", this.user);
    console.log("what comes in first name", this.user.firstname)
    console.log("what comes in last name", this.user.lastname)
    console.log("what comes in gender", this.user.gender)
    console.log("what comes in email", this.user.email)
    console.log("what comes in password", this.user.password)
  }
}

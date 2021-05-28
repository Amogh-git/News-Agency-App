import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  signin = true;
  RegistrationForm = new FormGroup({
    fname : new FormControl(''),
    lname : new FormControl(''),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    cpassword : new FormControl('', Validators.required),
  })
  LoginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }
  onsubmit(){

    console.log('jdhfsdgfubuffuiffybiobfnilfbsdfoifybfify');
  }
}

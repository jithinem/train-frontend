import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:any;
  password:any;
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){}
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%^&*()-_=+.]*')]]

  })
  login(){
    var email=this.loginForm.value.email;
    var password=this.loginForm.value.password;
    if(this.loginForm.valid){
      this.ds.login(email,password).subscribe(
        (result:any)=>{
          localStorage.setItem('email',JSON.stringify(result.email) );

          alert(result.message)
          this.router.navigateByUrl('home')
        },
        result=>{
          alert(result.error.message)
        }
      )
    }

  }

}

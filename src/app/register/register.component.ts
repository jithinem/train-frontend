import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){}
  username:any;
  password:any;
  confirmpassword:any;
  email:any;
  phone:any;
  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%^&*()-_=+.]*')]],
    confirmpassword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%^&*()-_=+.]*')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  register(){
    var username=this.registerForm.value.username;
    var password=this.registerForm.value.password;
    var confirmpassword=this.registerForm.value.confirmpassword;
    var email=this.registerForm.value.email;
    var phone=this.registerForm.value.phone;
    if(this.registerForm.valid){
      if(password==confirmpassword){
        const result=this.ds.register(username,password,confirmpassword,email,phone).subscribe(
          (result:any)=>{
            alert(result.message)
            this.router.navigateByUrl('');
          },
          result=>{
            alert(result.error.message)
          }
        )    
      }
      else{
        alert('password mismatch')
      }
    }   
  }

}

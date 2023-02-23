import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){}
  adminForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%^&*()-_=+.]*')]]
  })
  adminLogin(){
    var email=this.adminForm.value.email;
    var password=this.adminForm.value.password;
    if(this.adminForm.valid){
      this.ds.login(email,password).subscribe(
        (result:any)=>{
          alert(result.message)
          this.router.navigateByUrl('adminhome')
        },
        result=>{
          alert(result.error.message)
        }
      )
    }

    
  }

}

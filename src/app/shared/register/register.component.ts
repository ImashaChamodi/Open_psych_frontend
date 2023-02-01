import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import {v4 as uuidv4} from 'uuid';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private registerService: RegisterService, private router: Router,private toastr:ToastrService) { }

  public registerform=new FormGroup({
    usertype: new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  });
  userTypes=[{value:"doctor",label:"Doctor"},{value:"patient",label:"Patient"}];
  newuuid:any;

  ngOnInit() {

     this.newuuid= uuidv4();
  }

  onSubmit() {
    let userObject:any={};
    userObject=this.registerform.value;
    userObject.id=this.newuuid;

    this.registerService.register(userObject).subscribe((res:any)=>{
      if(res.success){
        this.toastr.success(res.message)
        this.router.navigate(['login']);
      }
      else{
        this.toastr.error("Something went wrong!")
      }
    });
}

}

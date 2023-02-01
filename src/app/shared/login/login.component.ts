import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginservice: LoginService, private router: Router, private toastr: ToastrService) { }


  ngOnInit() {


  }

  onLogin() {

    //  login logic here
    this.loginservice.userlogin(this.loginform.value).subscribe((res:any)=> {

      let userObject = {
        "name":res[0].username,
        "id": res[0].id,
        "userType": res[0].usertype
      }
      sessionStorage.setItem('currentuserdetails', JSON.stringify(userObject));
      this.loginservice.updateUserData(userObject);

      if(res[0].usertype=="patient"){
        this.router.navigate(['/userdashboard']);
        this.toastr.success('Welcome to patient dashboard!');
      }
      else{
        this.router.navigate(['/ddashboard']);
        this.toastr.success('Welcome to doctor dashboard!');
      }
    })

  }



  onRegister() {
    this.router.navigate(['/register']);
  }
}

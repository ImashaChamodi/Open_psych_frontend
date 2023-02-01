import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  userDetails:any={};

  constructor(private loginservice: LoginService, private router: Router){
    this.loginservice.data.subscribe(data=>{
      this.userDetails = data;
    });
  }


  ngOnInit(): void {

  }

  onClickLogin(){
    if(this.userDetails){
      sessionStorage.removeItem('currentuserdetails');
      this.loginservice.updateUserData({});
      this.router.navigate(['login']);
    }
    else{
      this.loginservice.updateUserData({});
      this.router.navigate(['login']);
    }
  }

  onClickHome(){
    if(this.userDetails){
      if(this.userDetails.userType=="patient"){
        this.router.navigate(['userdashboard']);
      }
      else{
        this.router.navigate(['ddashboard']);
      }
    }
    else{
      sessionStorage.removeItem('currentuserdetails');
      this.router.navigate(['home']);
    }
  }


}

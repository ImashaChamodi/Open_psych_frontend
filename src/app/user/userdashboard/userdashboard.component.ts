import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
constructor(private router:Router){}

navigateTo(route:string )
{this.router.navigate([route])}
}

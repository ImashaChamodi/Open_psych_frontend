import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docter-dashboard',
  templateUrl: './docter-dashboard.component.html',
  styleUrls: ['./docter-dashboard.component.css']
})
export class DocterDashboardComponent {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }



}

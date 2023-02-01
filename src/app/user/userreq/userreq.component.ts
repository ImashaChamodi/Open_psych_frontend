import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userreq',
  templateUrl: './userreq.component.html',
  styleUrls: ['./userreq.component.css']
})
export class UserreqComponent implements OnInit {
  selectedDoctorId: any;
  constructor(private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(params=>{
      this.selectedDoctorId=params['id'];
      console.log("test1234");
    });
  }

  navigateTo(route: string, type: string) {
    if(type=='chat'){
      this.router.navigate([route,this.selectedDoctorId])
    }
    else{
      this.router.navigate([route])
    }
  }

}

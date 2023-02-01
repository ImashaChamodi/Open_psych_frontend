import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  doctorList: any[] = [];

  constructor(private http: HttpClient, private listService: ListService, private router: Router) { }

  ngOnInit() {
    this.listService.getItems().subscribe((data: any) => {
      this.doctorList = data;
    });
  }

  navigateTo(id: string) {
    this.router.navigate(['/userreq',id])
  }
}



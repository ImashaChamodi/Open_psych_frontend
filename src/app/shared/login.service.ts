import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userData = new BehaviorSubject<any>('');
  data=this.userData.asObservable();

  constructor(private http: HttpClient) { }

  updateUserData(data: any){
    this.userData.next(data);
  }

  userlogin(data:any){
    return this.http.post("http://localhost:3000/login",data);
  }
}

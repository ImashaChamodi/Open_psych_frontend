import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  socket: any;
  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000', {
      transports: ["websocket"]
    });
  }


  creatProfile(data:any) {
    this.http.post("http://localhost:3000/submitDoctor",data).subscribe(res=>{
    })
  }

  updateProfile(data:any){
    this.http.put("http://localhost:3000/updateDoctor",data).subscribe(res=>{
    })
  }

  getProfile(data:any){
    return this.http.post("http://localhost:3000/getProfile",{"id":data});
  }

  doctorSocket(doctorId: string) {
    this.socket.emit('doctor_socket', { doctorId });
  }

  sendMessage(from:string,senderId: string, to:string, text:string, senderName:string){
    this.socket.emit('message', { from, senderId, to, text, senderName });
  }
}

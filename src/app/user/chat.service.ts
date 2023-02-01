import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000', {
      transports: ["websocket"]
    });
  }

  selectDoctor(patientId: string, doctorId: string) {
    this.socket.emit('select_doctor', { patientId, doctorId });
  }

  sendMessage(from:string, senderId:string, to:string, text:string, senderName:string){
    this.socket.emit('message', { from, senderId, to, text, senderName });
  }

}

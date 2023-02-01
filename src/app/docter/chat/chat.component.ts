import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  patientChatList: any[] = [];
  msgArray: any[] = [];
  doctorId: any;

  public chatform = new FormGroup({
    message: new FormControl('', Validators.required)
  });

  constructor(private doctorservice: DoctorService, private loginservice: LoginService) {

  }


  ngOnInit(): void {

    let userDetails=JSON.parse(sessionStorage.getItem('currentuserdetails')||'{}');
    this.doctorId = userDetails.id;

    this.doctorservice.doctorSocket(this.doctorId);
    this.doctorservice.socket.on('message', (data: any) => {
      let chatObject: any = {};
      chatObject.message = data.text;
      chatObject.person = "Patient";
      chatObject.patientId = data.senderId;
      chatObject.patientName = data.senderName;
      const res = this.patientChatList.findIndex(pChat=>{
        return pChat.from==chatObject.patientId;
      })
      if(res!=-1){
        this.patientChatList[res].messageHistory.push(chatObject);
      }
      else{
        this.patientChatList.push({"fromName":chatObject.patientName, "from": chatObject.patientId,"messageHistory":[chatObject]})
      }
    });

  }

  onSubmit(to:string) {
    let chatObject:any={};
    chatObject=this.chatform.value;
    chatObject.person = "Doctor";
    const res = this.patientChatList.findIndex(pChat=>{
      return pChat.from==to;
    })
    if(res!=-1){
      this.patientChatList[res].messageHistory.push(chatObject);
    }
    else{
      this.patientChatList.push({"from": chatObject.patientId,"messageHistory":[chatObject]})
    }
    this.doctorservice.sendMessage("doctor", this.doctorId, to, chatObject.message,"");
    this.chatform.reset({message:''});
  }

}

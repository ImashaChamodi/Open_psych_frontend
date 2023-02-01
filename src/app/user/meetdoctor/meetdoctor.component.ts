import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-meetdoctor',
  templateUrl: './meetdoctor.component.html',
  styleUrls: ['./meetdoctor.component.css']
})
export class MeetdoctorComponent implements OnInit {
  selectedDoctorId: any;
  patient: any;
  msgArray:any[]=[];
  constructor(private chatservice: ChatService, private activeroute: ActivatedRoute, private loginservice: LoginService) {

  }

  public chatform = new FormGroup({
    message: new FormControl('',Validators.required)
  });


  ngOnInit(): void {

    let userDetails=JSON.parse(sessionStorage.getItem('currentuserdetails')||'{}');
    this.patient = userDetails;


    this.activeroute.params.subscribe(params => {
      this.selectedDoctorId = params['id'];
    })

    this.chatservice.selectDoctor(this.patient.id, this.selectedDoctorId);
    this.chatservice.socket.on('message', (data: any) => {
      let chatObject: any = {};
      chatObject.message = data.text;
      chatObject.person = "Doctor";
      this.msgArray.push(chatObject);
    });
  }

  onSubmit() {
    let chatObject:any={};
    chatObject=this.chatform.value;
    chatObject.person="Patient";
    this.msgArray.push(chatObject);
    this.chatservice.sendMessage("patient", this.patient.id, this.selectedDoctorId,chatObject.message, this.patient.name);
    this.chatform.reset({message:''});
  }
}

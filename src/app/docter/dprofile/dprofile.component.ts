import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { VirtualTimeScheduler } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-dprofile',
  templateUrl: './dprofile.component.html',
  styleUrls: ['./dprofile.component.css']
})
export class DprofileComponent implements OnInit  {

  public profileform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    workingstatus: new FormControl('', [Validators.required]),
    specializedarea: new FormControl('', [Validators.required])
});

  specialties=[
    {value:"psychiatrists",label:"Psychiatrists"},
    {value:"psychologists",label:"Psychologists"},
    {value:"counselor",label:"Counselor"},
    {value:"psychoanalysts",label:"Psychoanalysts"}
  ];
  workstatus=[
    {value:"working",label:"Working"},
    {value:"retired",label:"Retired"}
  ]

  currentuserid:any;
  editmode:boolean=false;

  constructor(private doctorService: DoctorService, private router: Router, private toastr: ToastrService, private loginservice: LoginService) { }

  ngOnInit() {
    let userDetails=JSON.parse(sessionStorage.getItem('currentuserdetails')||'{}');
    this.currentuserid=userDetails.id;
    this.doctorService.getProfile(this.currentuserid).subscribe((res:any)=> {
      if(res[0]){
        this.editmode=true;
        this.profileform.patchValue(res[0]);
      }
      else{
        this.editmode=false;
      }
    })
 }

  onSave() {
    let profileObject:any={};
    profileObject=this.profileform.value;
    profileObject.id=this.currentuserid;

    if(this.editmode){
      this.doctorService.updateProfile(profileObject);
      this.toastr.success('Profile updated succesfully!');
    }
    else{
      this.doctorService.creatProfile(profileObject);
      this.toastr.success('Profile saved succesfully!');
    }

  }
}

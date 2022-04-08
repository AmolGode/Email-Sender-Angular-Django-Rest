import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  constructor(private snack:MatSnackBar , private userDataService : UserDataService) { }

  ngOnInit(): void {
  }

  openSnackBar()
  {
    this.snack.open("Button is cliccked...!","Ok");
  }

  to='';
  subject='';
  message='';

  loadingFlag=false;

  sendEmail()
  {
    this.loadingFlag=true;

    console.warn(this.to);
    console.warn(this.subject);
    console.warn(this.message);

    const fd = new FormData();
    fd.append('subject',this.subject);
    fd.append('message',this.message);
    fd.append('body',this.message);
    fd.append('to',this.to);

    this.userDataService.sendEmail(fd).subscribe((response:any)=>{
      this.loadingFlag=false;

      if(response.code == 1)
      {
        this.snack.open("Email is Sent Successfully.........!","Ok");
        console.warn('Valid Email...!');
        this.subject = this.message = '';
      }else
      {
        console.warn('Invalid Email...!');//Only ckecking syntax...!
        this.snack.open("Invlid Email ... :(","Ok");
      }
      console.warn(response.resp);
    },(error)=>{
      this.loadingFlag=false;
      console.warn(error);
      this.snack.open("Email is Not Sent :( .........!","Ok");
    });
  }

}

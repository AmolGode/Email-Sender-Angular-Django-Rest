import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  api_url = 'http://127.0.0.1:8000';

  sendEmail(fd:any)
  {
    return this.http.post(this.api_url+'/email_api/send_email/',fd);
  }
}

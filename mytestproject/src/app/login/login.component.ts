import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,private serverService: ServerService,private http: HttpClient) { }

  ngOnInit() {
  }
  login(){
    let api_req:any = new Object();
    let agents_req:any = new Object();
    agents_req.action="login_validation";
    agents_req.usr_name= $('#user_name').val();
    agents_req.usr_email= $('#user_email').val();
    agents_req.password= $('#password').val();
    api_req.operation="test_login";
    api_req.moduleType="test_login";
    api_req.api_type="web";
    api_req.access_token=localStorage.getItem('access_token');
    api_req.element_data = agents_req;
    console.log(api_req);
        this.serverService.sendServer(api_req).subscribe((response:any) => {
          console.log(response.result.data);
          if(response.result.status==true){
            this.router.navigate(['/user-list']);
          }
        }, 
        (error)=>{
            //console.log(error);
        });
  }
  register(){
    this.router.navigate(['/register']);
  }

}

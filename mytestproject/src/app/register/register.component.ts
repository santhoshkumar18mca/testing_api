import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router,private serverService: ServerService,private http: HttpClient) { }
  profilePicture: File | null = null;

  ngOnInit() {
  }

  onFileSelected(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement);
    if (inputElement.files && inputElement.files.length > 0) {
      this.profilePicture = inputElement.files[0];
    }
  }
  // login(){
  //   let api_req:any = new Object();
  //   let agents_req:any = new Object();
  //   agents_req.action="login_validation";
  //   agents_req.usr_name= $('#user_name').val();
  //   agents_req.usr_email= $('#user_email').val();
  //   agents_req.password= $('#password').val();
  //   api_req.operation="test_login";
  //   api_req.moduleType="test_login";
  //   api_req.api_type="web";
  //   api_req.access_token=localStorage.getItem('access_token');
  //   api_req.element_data = agents_req;
  //   console.log(api_req);
  //       this.serverService.sendServer(api_req).subscribe((response:any) => {
  //         console.log(response.result.data);
  //         if(response.result.status==true){
  //           this.router.navigate(['/register']);
  //         }
  //       }, 
  //       (error)=>{
  //           //console.log(error);
  //       });
  // }
  registerUser() {
    console.log(this.profilePicture);
    var formData:any = new FormData();
    formData.append('operation', 'test_user');
    formData.append('moduleType', 'test_user');
    formData.append('api_type', 'web');
    formData.append('action', 'media_upload');
    formData.append('usr_name', $('#user_name').val());
    formData.append('usr_mail', $('#user_email').val());
    formData.append('password', $('#password').val());
    formData.append('image', this.profilePicture);
    var self  =this;
    $.ajax({
      url: "http://127.0.0.1:4005/api/v1.0/index_new.php",
      type: 'POST',
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false,
      success: function (data) {
        console.log(data);
        self.router.navigate(['/success']);
        //console.log(this.parsed_data);
      }
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user_list: any;
  profilePicture: File;
  profile_image: any;
  user_id: any;

  constructor(public router: Router,private serverService: ServerService) { }

  ngOnInit() {
    this.userlist();

  }
  close(){
    $('#edit_user').modal('hide');
  }
  onFileSelected(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement);
    if (inputElement.files && inputElement.files.length > 0) {
      this.profilePicture = inputElement.files[0];
    }else{
      this.profilePicture = this.profilePicture;
    }
  }

  userlist(){
    let api_req:any = new Object();
    let agents_req:any = new Object();
    agents_req.action="list_user";
    agents_req.search_text="";
    api_req.operation="test_user";
    api_req.moduleType="test_user";
    api_req.api_type="web";
    api_req.element_data = agents_req;
    console.log(api_req);
        this.serverService.sendServer(api_req).subscribe((response:any) => {
          console.log(response.result.data);
          if(response.result.status==true){
            this.user_list = response.result.data;
          }
        }, 
        (error)=>{
            //console.log(error);
        });
  }
  searchtext(){
    let api_req:any = new Object();
    let agents_req:any = new Object();
    agents_req.action="list_user";
    agents_req.search_text=$('#search_text').val();
    api_req.operation="test_user";
    api_req.moduleType="test_user";
    api_req.api_type="web";
    api_req.element_data = agents_req;
    console.log(api_req);
        this.serverService.sendServer(api_req).subscribe((response:any) => {
          console.log(response.result.data);
          if(response.result.status==true){
            this.user_list = response.result.data;
          }
        }, 
        (error)=>{
            //console.log(error);
        });

  }
  delete_user(data:any){
    let api_req:any = new Object();
    let agents_req:any = new Object();
    agents_req.action="delete_user";
    agents_req.user_id=data;
    api_req.operation="test_user";
    api_req.moduleType="test_user";
    api_req.api_type="web";
    api_req.element_data = agents_req;
    console.log(api_req);
        this.serverService.sendServer(api_req).subscribe((response:any) => {
          console.log(response.data);
          if(response.status=="true"){
            this.userlist();
          }
        }, 
        (error)=>{
            //console.log(error);
        });
  }
  edit_user(data:any){
    $('#edit_user').modal('show');
    let api_req:any = new Object();
    let agents_req:any = new Object();
    agents_req.action="edit_user";
    agents_req.user_id=data;
    api_req.operation="test_user";
    api_req.moduleType="test_user";
    api_req.api_type="web";
    api_req.element_data = agents_req;
    console.log(api_req);
        this.serverService.sendServer(api_req).subscribe((response:any) => {
          console.log(response);
          if(response.result.status==true){
            this.profilePicture = response.result.data.image;
            this.user_id  = response.result.data.user_id;
            $('#user_name').val(response.result.data.usr_name);
            $('#user_email').val(response.result.data.usr_mail);
            $('#password').val(response.result.data.password);
            $('#image').val(this.profilePicture);
  //   agents_req.usr_email= $('#user_email').val();
  //   agents_req.password= $('#password').val();
          }
        }, 
        (error)=>{
            //console.log(error);
        });
  }
  update_user(){
    console.log(this.profilePicture);
    var formData:any = new FormData();
    formData.append('operation', 'test_user');
    formData.append('moduleType', 'test_user');
    formData.append('api_type', 'web');
    formData.append('action', 'update_user');
    formData.append('user_id', this.user_id);
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
        self.userlist();
        $('#edit_user').modal('hide');
        // self.router.navigate(['/success']);
        //console.log(this.parsed_data);
      }
    });

  }
}

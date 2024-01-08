import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public router: Router,private serverService: ServerService) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/login']);
  }

}

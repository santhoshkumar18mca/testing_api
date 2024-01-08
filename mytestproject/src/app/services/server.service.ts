import { Injectable } from '@angular/core';
import {  EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Subject } from 'rxjs';
// import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
declare var iziToast: any;
@Injectable({
    providedIn: 'root'
})
export class ServerService {
    public UserList3CX: any;
    // public socket_data: any;
    
    browsertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    show: Subject<any> = new Subject();
    constructor(private http: HttpClient, public router: Router,private zone: NgZone) {
        // this.afMessaging.messaging.subscribe(
        //     (_messaging) => {
        //         _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        //         _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);

        //     }
        // )


    }

    sendServer(postData: any[]) {
          let company=  localStorage.getItem('company_name');
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
       
        return this.http.post("http://" + window.location.hostname + ":4005/api/v1.0/index.php", postData,httpOptions);


    }
    sendServer_new(postData: any[]) {
          let company=  localStorage.getItem('company_name');
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
       
        return this.http.post("https://" + window.location.hostname + ":4005/api/v1.0/index_new.php", postData,httpOptions);


    }

}
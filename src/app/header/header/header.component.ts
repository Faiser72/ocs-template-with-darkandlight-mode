import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUserName: string;
  roleName: string;
  displayName: string;
  isLoggedIn: any;

  showOldPwd: boolean = true;
  showPwd: boolean = true;
  showModal: boolean;
  USER_NAME: any;
  USER_ROLE: any;
  date: any;
  today: number = Date.now();
  timer;

  theme:string;

  constructor(private router: Router,

    private toaster: ToastrService,
    private appComponent: AppComponent,
    ) {
  }


  showOldPwdMethod() {
    let state: boolean = this.showOldPwd
    this.showOldPwd = !state;
  }

  showPwdMethod() {
    let state: boolean = this.showPwd
    this.showPwd = !state;
  }

  onChange(value){
  console.log(value.checked);
  if(value.checked==true){
    localStorage.setItem('theme', "skin-yellow")
    this.theme="content-wrapper-dark";
  }
  else if(value.checked==false){
    this.theme="content-wrapper-light";
  localStorage.setItem('theme', "skin-red")
  }
  
  }

  doLogout() {
   
  }

  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
  response;
  valid(newPwd: string, cPwd: string) {
    

  }
}

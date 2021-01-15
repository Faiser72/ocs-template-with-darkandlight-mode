import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  isLoggedIn = false;
  loggedUser: string = '';
  sideBarOpen = true;
  showSpinner: boolean;

  constructor(private router: Router,
) { }

  ngOnInit() {
   
  }

}

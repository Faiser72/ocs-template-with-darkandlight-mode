import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  USER_ROLE: string;
  USER_NAME: string;
  isLoggedIn:any;

  currentUserName: string;
  roleName: string;
  displayName: string;
  email: string;


  constructor(public router: Router,
) { 
     
  }

  ngOnInit() {
    
  }
/** 
 * Getting Different Roles Start
 */
  isSuperAdminRole() {   
  
  }

  isAdminRole(){
   
  }

  isLibraryAdminRole(){
    
  }

  isLibraryStaffRole(){
    
  }

    isStaffRole(){
     
  }
/** 
 * Getting Different Roles End
 */

  routeToSearchBooks() {
    this.router.navigateByUrl('default/library', { skipLocationChange: true }).then(() => {
      this.router.navigate(['default/library/searchbooks']);
    });
  }

  logMeOut() {
    this.router.navigate(['/login']);
  }
}

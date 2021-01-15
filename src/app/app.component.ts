import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OCS';
  text: string;

  constructor(private spinner: NgxSpinnerService,private router: Router) { }

  startSpinner(text: string) {
    this.text = text;
    this.spinner.show( )
  }

  stopSpinner() {
    this.spinner.hide();
  }

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }

          var scrollToTop = window.setInterval(function () {
              var pos = window.pageYOffset;
              if (pos > 0) {
                  window.scrollTo(0, pos - 20); 
              } else {
                  window.clearInterval(scrollToTop);
              }
          }, 20);
      });
  }
}

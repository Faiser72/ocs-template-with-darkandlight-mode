import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarModule } from "./sidebar/sidebar.module";
import { HeaderModule } from "./header/header.module";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar/sidebar.component";
import { HeaderComponent } from "./header/header/header.component";
import { FooterComponent } from "./footer/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';

 
import { DefaultModule } from "./default/default.module";
import { DefaultComponent } from "./default/default/default.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';


import { NgxSpinnerModule } from 'ngx-spinner';


import {FullCalendarModule} from 'primeng/fullcalendar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HeaderModule,
    RouterModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatSlideToggleModule,
    FullCalendarModule,

  ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
   
  ],
  bootstrap: [AppComponent],
}) 
export class AppModule {}

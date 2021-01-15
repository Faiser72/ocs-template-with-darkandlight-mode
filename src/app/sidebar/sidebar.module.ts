import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,

    // MatHeaderCell,
    // MatHeaderCellDef,
    // MatHeaderRow,
    // MatHeaderRowDef
  ],
  exports:[

    BrowserAnimationsModule,
 
  ]
})
export class SidebarModule { }

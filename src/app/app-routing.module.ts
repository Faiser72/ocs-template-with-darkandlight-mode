import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultComponent } from "./default/default/default.component";
import { SidebarComponent } from "./sidebar/sidebar/sidebar.component";





const routes: Routes = [

// Vikash modules Starts Here......!!

  // { path: "", component: DashboardComponent },

  {
    path: "", component: DefaultComponent,
    children: [
      { path: "sidebar", component: SidebarComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

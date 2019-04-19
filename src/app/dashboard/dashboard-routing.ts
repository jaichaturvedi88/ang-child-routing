import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./container/nav/home/home.component";
import { MiReportsComponent } from "./container/nav/mi-reports/mi-reports.component";


const containerRoutes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        {
          path: '',
        //   canActivateChild: [AuthGuard],
          children: [
            { path: 'home', component: HomeComponent },
            { path: 'mireports', component: MiReportsComponent }
          ]
        }
      ]
    }
  ];

@NgModule({
    imports: [
      RouterModule.forChild(containerRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class DashboardRoutingModule {}
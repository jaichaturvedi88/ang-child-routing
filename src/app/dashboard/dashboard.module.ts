import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContainerComponent } from "./container/container.component";
import { DashboardRoutingModule } from "./dashboard-routing";
import { DashboardComponent } from "./dashboard.component";
import { NavComponent } from './container/nav/nav.component';
import { HomeComponent } from "./container/nav/home/home.component";
import { MiReportsComponent } from "./container/nav/mi-reports/mi-reports.component";



@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      ContainerComponent,
      DashboardComponent,
      HomeComponent,
      MiReportsComponent,
      ContainerComponent,
      NavComponent
    ],
    imports: [
        DashboardRoutingModule
    ],
    providers: [],
  })
  export class DashboardModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    MatButtonModule, MatCardContent, MatCardModule, MatFormFieldModule, MatGridListModule,
    MatInputModule,
    MatRippleModule
} from '@angular/material/';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DesingComponent } from './desing/desing.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ParsersComponent } from './parsers/parsers.component';
import { MappersComponent } from './mappers/mappers.component';
import { LookupsComponent } from './lookups/lookups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { app_routing } from './app.routes';
import { FlowsComponent } from './flows/flows.component';


/*APP ROUTES*/
/*const app_routes: routes = [

 
  
    { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent },
      { path: 'desing', component: DesingComponent },
      { path: 'monitor', component: MonitorComponent },
      { path: 'parsers', component: ParsersComponent },
      { path: 'mappers', component: MappersComponent },
      { path: 'lookups', component: LookupsComponent }

  ]

;*/

@NgModule({
  declarations: [
    AppComponent,
    DesingComponent,
    MonitorComponent,
    ParsersComponent,
    MappersComponent,
    LookupsComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    FlowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MatStepperModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatGridListModule,
      app_routing

  ],
    exports: [
        MatStepperModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule
        
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

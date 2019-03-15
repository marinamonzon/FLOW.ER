import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { DesingComponent } from './desing/desing.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ParsersComponent } from './parsers/parsers.component';
import { MappersComponent } from './mappers/mappers.component';
import { LookupsComponent } from './lookups/lookups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlowsComponent } from './flows/flows.component';

const app_routes: Routes = [
{
path: '',
component: DashboardComponent,
children:[
{ path: '', component: HomeComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'about', component: AboutComponent },
{ path: 'desing', component: DesingComponent },
{ path: 'monitor', component: MonitorComponent },
{ path: 'parsers', component: ParsersComponent },
{ path: 'mappers', component: MappersComponent },
{ path: 'lookups', component: LookupsComponent },
{ path: 'flows', component: FlowsComponent }

//{ path: '**', pathMatch: 'full', redirectTo: 'home' }
]}
];

export const app_routing = RouterModule.forRoot(app_routes);
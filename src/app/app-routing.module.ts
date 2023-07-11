import { NgModule } from '@angular/core';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { ApplicationDataComponent } from './application-data/application-data.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'leave-form', component: LeaveFormComponent },
  { path: 'application-data', component: ApplicationDataComponent },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

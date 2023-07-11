import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FileFieldComponent } from './file-field/file-field.component';
import { ApplicationDataComponent } from './application-data/application-data.component';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaveFormComponent,
    FooterComponent,
    FileFieldComponent,
    ApplicationDataComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

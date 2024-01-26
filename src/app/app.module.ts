import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EmployeListComponent } from './employe-list/employe-list.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    CreateEmployeComponent,
    UpdateEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

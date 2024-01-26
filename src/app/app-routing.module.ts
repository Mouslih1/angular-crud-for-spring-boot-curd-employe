import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

const routes: Routes = [
  { path: 'employes', component: EmployeListComponent },
  { path: 'create-employe', component: CreateEmployeComponent},
  { path: '', redirectTo: 'employes', pathMatch: 'full'},
  { path: 'update-employe/:id', component: UpdateEmployeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

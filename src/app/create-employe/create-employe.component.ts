import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {

  employe: Employe = new Employe();

  constructor(private employeService: EmployeService, private route: Router) { }

  ngOnInit(): void {
  }

  saveEmploye()
  {
    this.employeService.saveEmploye(this.employe).subscribe(() => this.goToEmployeList()),
    error => console.log(error);
  }

  goToEmployeList()
  {
    this.route.navigate(['/employes']);
  }

  onSubmit()
  {
    this.saveEmploye();
  }
}

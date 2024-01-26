import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  employes : Employe[];

  constructor(private employeService : EmployeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployes();
  }

  private getEmployes()
  {
    this.employeService.getEmployeList().subscribe(data => {
      this.employes = data;
    });
  }

  updateEmploye(id: number)
  {
    this.router.navigate(['update-employe', id]);
  }
}

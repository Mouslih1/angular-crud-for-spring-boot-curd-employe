import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  id: number;
  employe: Employe = new Employe();

  constructor(private employeService: EmployeService, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.id = this.route.snapshot.params['id'];
    this.employeService.getEmployeById(this.id).subscribe(data => {
      console.log(data);
      this.employe = data;
    },error => console.log(error));
  }

}

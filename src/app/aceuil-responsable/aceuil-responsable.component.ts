import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceuil-responsable',
  templateUrl: './aceuil-responsable.component.html',
  styleUrls: ['./aceuil-responsable.component.css']
})
export class AceuilResponsableComponent implements OnInit {
  image1: string ="assets/img/emptimesheet.jpg";
  image2: string ="assets/img/freesheet.jpg";
  constructor(
    private router: Router) { 
  }

  ngOnInit()  {  }

  redirectionForm() {
    
    
    this.router.navigate(['/Traine Form']);
  }

  redirectionTimesheetIntern() {
    
    
    this.router.navigate(['/Timesheet Intern']);
}

}

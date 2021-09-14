import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceuil-rh',
  templateUrl: './aceuil-rh.component.html',
  styleUrls: ['./aceuil-rh.component.css']
})
export class AceuilRhComponent implements OnInit {
  
  image1: string ="assets/img/TraineeF.jpg";
  image2: string ="assets/img/emptimesheet.jpg";
  image3: string ="assets/img/TrainneS.jpg";
  image4: string ="assets/img/ITL.png";
  image5: string ="assets/img/Recap.jpg";
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

redirectionItDepartement() {
    
    
  this.router.navigate(['/ITDepartment']);
}
redirectionTraineSpace() {
    
    
  this.router.navigate(['/TraineSpace']);

}
redirectionRecapitulation() {
    
    
  this.router.navigate(['/Recapitulation']);

}}

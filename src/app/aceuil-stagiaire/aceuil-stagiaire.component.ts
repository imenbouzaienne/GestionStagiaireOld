import { AceuilS } from './../model/aceuilS.model';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-aceuil-stagiaire',
  templateUrl: './aceuil-stagiaire.component.html',
  styleUrls: ['./aceuil-stagiaire.component.css']
})
export class AceuilStagiaireComponent implements OnInit {
  myimage: string ="assets/img/Time.png";
  image: string ="assets/img/Trainee.jpg";
  img: string ="assets/img/Recap.jpg";
  constructor(
    private router: Router
    ) { 
  }

  ngOnInit()  { 
  
    
   
   }

  redirectionTraineeForm() {
    
    
    this.router.navigate(['/FormulaireStagiaire']);
  }

  redirectionTimesheet() {
    
    
    this.router.navigate(['/Timesheet']);
}

redirectionRecapitulation() {
    
    
  this.router.navigate(['/Recapitulation']);
}


}

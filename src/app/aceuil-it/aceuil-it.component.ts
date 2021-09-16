import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceuil-it',
  templateUrl: './aceuil-it.component.html',
  styleUrls: ['./aceuil-it.component.css']
})
export class AceuilITComponent implements OnInit {
  img1: string ="assets/img/IT.png";
  constructor(
    private router: Router) {
  }

  ngOnInit()  {  }

  redirectionMateriel() {


    this.router.navigate(['LogistiqueEquipement']);
  }




}

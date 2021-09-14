import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-stagiaire',
  templateUrl: './formulaire-stagiaire.component.html',
  styleUrls: ['./formulaire-stagiaire.component.css']
})
export class FormulaireStagiaireComponent implements OnInit {
  formulaireForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.formulaireForm = this.formBuilder.group({
      
  });

  }

}

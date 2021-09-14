import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AceuilStagiaireComponent } from './aceuil-stagiaire/aceuil-stagiaire.component';
import { AceuilResponsableComponent } from './aceuil-responsable/aceuil-responsable.component';
import { AceuilRhComponent } from './aceuil-rh/aceuil-rh.component';
import { RecapitulationComponent } from './recapitulation/recapitulation.component';
import { FormulaireStagiaireComponent } from './formulaire-stagiaire/formulaire-stagiaire.component';
import { AceuilITComponent } from './aceuil-it/aceuil-it.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LogistiqueEquipementComponent } from './logistique-equipement/logistique-equipement.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AceuilStagiaireComponent,
    AceuilResponsableComponent,
    AceuilRhComponent,
    FormulaireStagiaireComponent,
    RecapitulationComponent,
    AceuilITComponent,
    TimesheetComponent,
    LogistiqueEquipementComponent,
    FooterComponent,
   
    MenuComponent,
     
         ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatToolbarModule,
    MatButtonModule,
  
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule

  
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

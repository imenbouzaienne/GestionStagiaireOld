import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AceuilStagiaireComponent} from './aceuil-stagiaire/aceuil-stagiaire.component';
import {AceuilResponsableComponent} from './aceuil-responsable/aceuil-responsable.component';
import {AceuilRhComponent} from './aceuil-rh/aceuil-rh.component';
import {RecapitulationComponent} from './recapitulation/recapitulation.component';
import {FormulaireStagiaireComponent} from './formulaire-stagiaire/formulaire-stagiaire.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {AceuilITComponent} from './aceuil-it/aceuil-it.component';
import {LogistiqueEquipementComponent} from './logistique-equipement/logistique-equipement.component';
import {MenuComponent} from './menu/menu.component';


const routes: Routes = [
  {path: '', redirectTo: '/' + 'login', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},

  {path: 'AceuilStagaire', component: AceuilStagiaireComponent},

  {path: 'Timesheet', component: TimesheetComponent},

  {path: 'FormulaireStagiaire', component: FormulaireStagiaireComponent},

  {path: 'Recapitulation', component: RecapitulationComponent},

  {path: 'AceuilResponsable', component: AceuilResponsableComponent},

  {path: 'AceuilRh', component: AceuilRhComponent},

  {path: 'AceuilIT', component: AceuilITComponent},

  {path: 'LogistiqueEquipement', component: LogistiqueEquipementComponent},

  {path: 'menu', component: MenuComponent},

  {path: '**', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [{ "login":"imen" ,"password":"145652" ,"roles":['STAGIAIRE']},
                   { "login":"anissa" ,"password":"1234" ,"roles":['RH']},
                   { "login":"hichem" ,"password":"1234" ,"roles":['ENCADRANT']},
                   { "login":"liwee" ,"password":"1234" ,"roles":['IT']}
                  ]
  
  
  login:any ;
  password: string; 
  roles:string[];


  constructor() {
  }
}

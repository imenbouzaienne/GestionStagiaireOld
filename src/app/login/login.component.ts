import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image: string ="assets/img/Digital.jpg";

  loginForm: FormGroup;
 

  constructor(  private formBuilder: FormBuilder,
    private router: Router) { } 
    
  
  ngOnInit()  {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onLoggedIn()
   { 
   
     if (this.loginForm.invalid) {
       console.log(this.f.login)
       console.log(this.f.password)
      return;
  }
         if(this.f.login.value === "Hichem"){
      this.router.navigate(['/AceuilResponsable']);
     }
     else if(this.f.login.value === "Anissa"){
      this.router.navigate(['/AceuilRh']);
      
     }
     else if(this.f.login.value === "Liwee"){
      this.router.navigate(['/AceuilIT']);
      
     }

     else {
      this.router.navigate(['/AceuilStagaire']);
     }
     }

}

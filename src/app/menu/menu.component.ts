import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  image: string ="assets/img/Sigle.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}

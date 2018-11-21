import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OficinasTecnologicas';
  
  constructor() {

  }

  ngOnInit() {
    console.log('Componente principal "app.component.ts" cargado y corriendo');
  }
  
}

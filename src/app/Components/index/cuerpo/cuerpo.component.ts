import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    console.log('   Componente "cuerpo.component.ts" cargado y corriendo');
  }

}

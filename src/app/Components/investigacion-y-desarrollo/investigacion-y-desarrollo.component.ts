import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigacion-y-desarrollo',
  templateUrl: './investigacion-y-desarrollo.component.html',
  styleUrls: ['./investigacion-y-desarrollo.component.css']
})
export class InvestigacionYDesarrolloComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('     Componente "investigacion-y-desarrollo.component.ts" cargado y corriendo');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    console.log(' Componente "index.component.ts" cargado y corriendo');
  }

}

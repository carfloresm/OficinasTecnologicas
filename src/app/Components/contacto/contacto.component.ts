import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    console.log('     Componente "contacto.component.ts" cargado y corriendo');
    this.form = this.formBuilder.group({
      nombre: [
        '', 
        [ 
          Validators.required,Validators.minLength(8),Validators.maxLength(30)
        ]
      ],

      telefono: [
        '', 
        [ 
          Validators.required,Validators.minLength(8),Validators.pattern("[0-9 ]*")
        ]
      ],

      email: [
        '', 
        [ 
          Validators.required,Validators.email
        ]
      ],

      asunto: [
        '', 
        [ 
          Validators.required,Validators.minLength(4),Validators.maxLength(50)
        ]
      ],

      mensaje: [
        '', 
        [ 
          Validators.required,Validators.minLength(10),Validators.maxLength(2000)
        ]
      ]
    });
  }
}

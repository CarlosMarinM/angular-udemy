import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    codigo: 'CO',
    nombre: 'Colombia'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  }];

  sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() { }

  guardar(forma: NgForm) {
    console.log('Formulario posteado');
    console.log(forma);
  }

}

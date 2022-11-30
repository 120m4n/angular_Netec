import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent {

  persona: Persona = {
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    birthDate: new Date(),
    edad: 0,
    escolaridad: '',
    sexo: '',
  };

  personas: Persona[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.persona);
    this.personas.push(this.persona);
    this.persona = {
      firstName: '',
      secondName: '',
      lastName: '',
      secondLastName: '',
      birthDate: new Date(),
      edad: 0,
      escolaridad: '',
      sexo: '',
    };
  }

}

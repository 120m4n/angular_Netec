import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent {
  cambiarSexo(_t126: { name: string; value: string; }) {
    this.persona.sexo = _t126.value;
  }
  
  setEdad(date: Date): void {
      this.edad = new Date().getFullYear() - new Date(date).getFullYear();
      console.log(this.edad);
  }

  checkEdad(date : Date| undefined) : boolean {
    if (date) {
      return new Date().getFullYear() - new Date(date).getFullYear() < 18;
    }
      return false;  
  }

  sexOptions = [
    { name: 'Masculino', value: 'M' },
    { name: 'Femenino', value: 'F' },
    { name: 'Otro', value: 'O' },
  ];




  edad: number = 0;

  persona: Persona = {
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    escolaridad: '',
    sexo: 'mujer',
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
      escolaridad: '',
      sexo: '',
    };
  }

  onSelectChange(event: any) {
    // console.log(event.target.value);
    this.setEdad(event.target.value);
  }

}

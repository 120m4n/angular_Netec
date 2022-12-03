import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent {
  cambiarSexo(_t126: { name: string; value: string; }) {
    this.persona.sexo = _t126.value;
  }
  
  setEdad(date: string | Date): void {
      this.edad = new Date().getFullYear() - new Date(date).getFullYear();
      console.log(this.edad);
  }

  checkEdad(date : string | Date| undefined) : boolean {
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
  
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe((data: Persona[]) => {
      this.personas = data;
      console.log(this.personas);
    });
  }

  createPersona() {
    this.personaService.createPersona(this.persona).subscribe((data: Persona) => {
      this.personas.push(data);
      this.persona = {
        firstName: '',
        secondName: '',
        lastName: '',
        secondLastName: '',
        escolaridad: '',
        sexo: 'mujer',
      };
    });
  }


  onSubmit() {
    console.log(this.persona);
    this.createPersona();
    this.edad = 0;
  }

  onSelectChange(event: any) {
    // console.log(event.target.value);
    this.setEdad(event.target.value);
  }

}

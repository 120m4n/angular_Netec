import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent {
  eliminarPersona(_t149: Persona) {
    if (confirm('¿Está seguro de eliminar la persona?')){
    this.personaService.deletePersona(_t149.id).subscribe((data) => {
      console.log(data);
      this.getPersonas();
    });
  }
  }
  editarPersona(_t149: Persona) {
   this.persona = _t149;


  }
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
    id: 0,
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
    if (this.persona.id === 0) {
      this.personaService.createPersona(this.persona).subscribe((data: Persona) => {
        this.personas.push(data);
        this.persona = {
          id: 0,
          firstName: '',
          secondName: '',
          lastName: '',
          secondLastName: '',
          escolaridad: '',
          sexo: 'mujer',
        };
      });
    } else {
      this.personaService.updatePersona(this.persona.id, this.persona).subscribe((data) => {
        this.getPersonas();
        this.persona = {
          id: 0,
          firstName: '',
          secondName: '',
          lastName: '',
          secondLastName: '',
          escolaridad: '',
          sexo: 'mujer',
        };
      });
    }
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

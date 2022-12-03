import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:3000';

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<Persona[]>(`${this.url}/personas`);
  }

  getPersona(id: string) {
    return this.http.get(`${this.url}/personas/${id}`);
  }

  createPersona(persona: any) {
    return this.http.post<Persona>(`${this.url}/personas`, persona);
  }

  updatePersona(id: string, persona: any) {
    return this.http.put(`${this.url}/personas/${id}`, persona);
  }

  deletePersona(id: string) {
    return this.http.delete(`${this.url}/personas/${id}`);
  }

}

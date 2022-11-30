import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    FormularioPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VacioPipe } from './pipes/vacio.pipe';
import { PersonaService } from './services/persona.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personas', component: FormularioPersonaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    FormularioPersonaComponent,
    HomeComponent,
    PageNotFoundComponent,
    VacioPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

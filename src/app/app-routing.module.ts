import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ExperienciaComponent } from './paginas/experiencia/experiencia.component';
import { PorfolioComponent } from './paginas/porfolio/porfolio.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

const routes: Routes = [
  {path:'', component:PrincipalComponent, pathMatch:'full'},
  {path:'principal', component:PrincipalComponent, },
  {path:'porfolio', component:PorfolioComponent, },
  {path:'experiencia', component:ExperienciaComponent,},
  {path:'contacto', component:ContactoComponent,},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

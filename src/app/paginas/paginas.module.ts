import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { PrincipalComponent } from './principal/principal.component';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    PorfolioComponent,
    ContactoComponent,
    ExperienciaComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    CardModule,
    AccordionModule,
    ChipsModule,
    ButtonModule

  ]
})
export class PaginasModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import {ChipsModule} from 'primeng/chips';
import { PaginasModule } from './paginas/paginas.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChipsModule,
    MenubarModule,
    PaginasModule,

  ],exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

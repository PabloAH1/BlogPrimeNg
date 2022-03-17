import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent  {

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label:'Menú',
              icon:'pi pi-align-justify',
              items:[
                  {
                      label:'Principal',
                      icon:'pi pi-user',
                      routerLink:'principal'
                  },
                  {
                      label:'Experiencia',
                      icon:'pi pi-briefcase',
                      routerLink:'experiencia'
                  },
                  {
                      label:'Portfolio',
                      icon:'pi pi-wallet',
                      routerLink:'porfolio'
                  },
                  {
                      label:'Contacto',
                      icon:'pi pi-envelope',
                      routerLink:'contacto'
                  },
              ]
          },
          {
              label:'Principal',
              icon:'pi pi-user',
              routerLink:'principal'

          },
          {
              label:'Experiencia',
              icon:'pi pi-briefcase',
              routerLink:'experiencia'

          },
          {
              label:'Porfolio',
              icon:'pi pi-wallet',
              routerLink:'porfolio'

          },
          {
              label:'Contacto',
              icon:'pi pi-envelope',
              routerLink:'contacto'
          }
      ];
  }
}

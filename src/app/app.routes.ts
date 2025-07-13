// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { ProductosComponent } from './components/productos/productos';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto';
import { ProductoFormComponent } from './components/producto-form/producto-form';
import { ContactoComponent } from './components/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', loadComponent: () => import('./components/inicio/inicio').then(m => m.InicioComponent) },
  { path: 'productos', loadComponent: () => import('./components/productos/productos').then(m => m.ProductosComponent) },
  { path: 'productos/nuevo', loadComponent: () => import('./components/producto-form/producto-form').then(m => m.ProductoFormComponent) },
  { path: 'productos/editar/:id', loadComponent: () => import('./components/producto-form/producto-form').then(m => m.ProductoFormComponent) },
  { path: 'productos/:id', loadComponent: () => import('./components/detalle-producto/detalle-producto').then(m => m.DetalleProductoComponent) },
  { path: 'contacto', loadComponent: () => import('./components/contacto/contacto').then(m => m.ContactoComponent)},
  { path: '**', redirectTo: '/inicio' },
];

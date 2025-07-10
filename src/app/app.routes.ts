import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio'; // Asegúrate de que sea así
import { ProductosComponent } from './components/productos/productos'; // Asegúrate de que sea así
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto'; // Asegúrate de que sea así
import { ContactoComponent } from './components/contacto/contacto'; // Asegúrate de que sea así
import { ProductoFormComponent } from './components/producto-form/producto-form'; // Asegúrate de que sea así

// ... el resto de tu código de rutas
export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige la ruta base a 'inicio'
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/nuevo', component: ProductoFormComponent }, // Ruta para crear un nuevo producto
  { path: 'productos/editar/:id', component: ProductoFormComponent }, // Ruta para editar un producto existente
  { path: 'productos/:id', component: DetalleProductoComponent }, // Ruta para el detalle de un producto
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/inicio' } // Ruta comodín para cualquier otra URL no definida, redirige a inicio
];


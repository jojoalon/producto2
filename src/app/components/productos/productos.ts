// src/app/components/productos/productos.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Importa RouterLink para la navegación
import { Servicioproducto } from '../../servicios/servicioproducto';
import { Product } from '../../servicios/servicioproducto';

// Importa tu servicio y la interfaz Product

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ RouterLink], // Añade CommonModule y RouterLink a los imports
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent implements OnInit {
  productos: Product[] = []; // Array para almacenar los productos

  constructor(private productoService: Servicioproducto) { } // Inyecta tu servicio

  ngOnInit(): void {
    this.getProducts(); // Llama al método para obtener productos cuando el componente se inicialice
  }

  getProducts(): void {
    this.productoService.getProducts().subscribe({
      next: (data) => {
        this.productos = data;
        console.log('Productos cargados:', this.productos); // Para depuración, puedes ver en la consola del navegador
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    });
  }
}


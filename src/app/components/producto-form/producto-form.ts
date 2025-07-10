import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Servicioproducto, Product } from '../../servicios/servicioproducto';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.css'
})
export class ProductoFormComponent implements OnInit {
  productForm: FormGroup; // Declara el formulario reactivo

  constructor(
    private fb: FormBuilder, // Inyecta FormBuilder para construir el formulario
    private productService: Servicioproducto, // Inyecta tu servicio de productos
    private router: Router // Inyecta Router para la navegación
  ) {
    // Inicializa el formulario en el constructor
    this.productForm = this.fb.group({
      title: ['', Validators.required], // Nombre, obligatorio
      price: ['', [Validators.required, Validators.min(0.01)]], // Precio, obligatorio y > 0
      description: ['', Validators.required], // Descripción, obligatorio
      category: ['', Validators.required], // Categoría, obligatorio
      image: ['', Validators.required] // URL de la imagen, obligatorio
      // La Fake Store API añade 'id' y 'rating', así que no los incluimos aquí.
    });
  }

  ngOnInit(): void {
    // No hay lógica compleja aquí por ahora, ya que es para 'agregar'.
    // La lógica para 'editar' se añadiría aquí, leyendo el ID de la URL.
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Crea un objeto Product compatible con el método addProduct del servicio
      const newProduct: Omit<Product, 'id' | 'rating'> = this.productForm.value;

      this.productService.addProduct(newProduct).subscribe({
        next: (response) => {
          console.log('Producto agregado con éxito:', response);
          alert('Producto agregado con éxito. ID: ' + response.id); // Alerta para el usuario
          this.router.navigate(['/productos']); // Redirige a la lista de productos
        },
        error: (error) => {
          console.error('Error al agregar producto:', error);
          alert('Error al agregar producto. Consulta la consola para más detalles.');
        }
      });
    } else {
      // Si el formulario no es válido, marca los campos como 'touched' para mostrar errores de validación
      this.productForm.markAllAsTouched();
      alert('Por favor, completa todos los campos requeridos correctamente.');
    }
  }

  onReset(): void {
    this.productForm.reset(); // Reinicia el formulario
  }

  goBack(): void {
    this.router.navigate(['/productos']); // Método para volver a la lista de productos
  }
}


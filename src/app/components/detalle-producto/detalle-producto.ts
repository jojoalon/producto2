import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicioproducto, Product } from '../../servicios/servicioproducto';
@Component({
  selector: 'app-detalle-producto',
  standalone: true,

  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProductoComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: Servicioproducto,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      if (productId) {
        this.getProductDetails(productId);
      } else {
        console.error('Error: No se proporcionó ID de producto en la URL.');
        this.router.navigate(['/productos']);
      }
    });
  }

  getProductDetails(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
        console.log('Detalles del producto cargados:', this.product);
      },
      error: (error) => {
        console.error('Error al cargar detalles del producto:', error);
        this.router.navigate(['/productos']);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/productos']);
  }
}


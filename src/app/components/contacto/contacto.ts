import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(7)
        ]
      ]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario de Contacto Enviado:', this.contactForm.value);
      alert('Mensaje enviado con éxito:\nEmail: ' + this.contactForm.value.email + '\nMensaje: ' + this.contactForm.value.message);
      this.onReset();
    } else {
      this.contactForm.markAllAsTouched();
      alert('El formulario tien errores. Por favor corregir.');
    }
  }

  onReset(): void {
    this.contactForm.reset();
    this.contactForm.markAsUntouched();
    this.contactForm.markAsPristine();
  }
}


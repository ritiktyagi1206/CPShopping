import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private router: Router) {}

  products = [
    { name: 'Watches', image: 'product3.avif', route: 'items' },
    { name: 'Mobile Stickers', image: 'Fitness.jpg', route: 'items' },
    { name: 'NFC Rings', image: 'SmartGlasses.avif', route: 'items' },
    { name: 'Key Rings', image: 'Hearables.jpg', route: 'items' },
  ];

  navigateTo(route?: string) {
    if (route) {
      this.router.navigate([route]);
    } else {
      console.error('Route is undefined!');
    }
  }
}

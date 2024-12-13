import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-items',
  imports: [CommonModule],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {
  constructor(private router : Router)
  {

  }
  products = [
    {
      name: 'Black Milanese Loop 2.0 Apple WatchBand',
      price: 999,
      offer: 'BUY 2 @ 1899',
      image: 'Item1.avif',
    },
    {
      name: 'Plum Nylon Loop Apple WatchBand',
      price: 999,
      offer: 'BUY 2 @ 1899',
      image: 'Item1.avif',
    },
    {
      name: 'Cobalt Blue Nylon Loop Apple WatchBand',
      price: 999,
      offer: 'BUY 2 @ 1899',
      image: 'Item1.avif',
    },
    {
      name: 'Black Poppy Magnetic Link Apple WatchBand',
      price: 999,
      offer: 'BUY 2 @ 1899',
      image: 'Item1.avif',
    },
  ];

  navigateTo(route?: string) {
    if (route) {
      this.router.navigate([route]);
    } else {
      console.error('Route is undefined!');
    }
  }
}

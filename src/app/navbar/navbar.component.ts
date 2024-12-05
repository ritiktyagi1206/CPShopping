import { CommonModule } from '@angular/common';
import { Component,HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuActive: boolean = false;
  constructor(private router: Router , private elRef: ElementRef, private renderer: Renderer2) {}
  navItems = [
    {
      label: 'Tech',
      imgSrc: 'Tech.avif',
      link: 'products',
      dropdown: [
        { label: 'Laptops', imgSrc: 'Laptop.jpg', link: '#' },
        { label: 'Phones', imgSrc: 'Mobile.jpg', link: '#' },
        { label: 'Accessories', imgSrc: 'Accessories.jpg', link: '#' },
      ],
    },
    {
      label: 'Wearables',
      imgSrc: 'Wearables.avif',
      link: 'products',
      dropdown: [
        { label: 'Smartwatches', imgSrc: 'Laptop.jpg', link: '#' },
        { label: 'Fitness Bands', imgSrc: 'Laptop.jpg', link: '#' },
      ],
    },
    {
      label: 'Giftings',
      imgSrc: 'Giftings.avif',
      link: 'products',
      dropdown: [
        { label: 'Corporate', imgSrc: 'Laptop.jpg', link: '#' },
        { label: 'Personal', imgSrc: 'Laptop.jpg', link: '#' },
      ],
    },
    {
      label: 'New Arrivals',
      imgSrc: 'NewArrival.avif',
      link: 'products',
      dropdown: [
        { label: 'Trending', imgSrc: 'Laptop.jpg', link: '#' },
        { label: 'Recently Launched', imgSrc: 'Laptop.jpg', link: '#' },
      ],
    },
  ];

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
  navigateTo(route?: string) {
    if (route) {
      this.isMenuActive = false;
      this.router.navigate([route]);
    } else {
      console.error('Route is undefined!');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isMenuActive) {
      this.isMenuActive = false; // Close the menu if the click was outside
    }
  }
}

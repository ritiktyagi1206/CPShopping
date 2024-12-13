import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-item',
  imports: [CommonModule, FooterComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  images = ['Image.jpg', 'Image2.jpg', 'Image3.jpg'];
  activeIndex = 0;

  colors = ['#000000', '#A52A2A', '#C0C0C0'];
  sizes = ['42mm', '44mm', '45mm', '46mm', '49mm'];

  selectedColor = this.colors[0];
  selectedSize = this.sizes[0];

  prevSlide() {
    this.activeIndex = (this.activeIndex + this.images.length - 1) % this.images.length;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  banks: string[] = ['Bank of Maharashtra', 'AU Small Finance Bank', 'Union Bank', 'Bank of India'];
  selectedBank: string | null = null;
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectBank(bank: string): void {
    this.selectedBank = bank;
    this.isDropdownOpen = false;
  }
}

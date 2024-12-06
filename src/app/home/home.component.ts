import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule , FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    'Slide1.avif',
    'Slide2.avif',
    'Slide3.avif',
    'Slide4.avif'
  ];


  slides = [
    {
      image: 'Slide1.avif',
      title: 'Slide 1 Title',
      description: 'Description for Slide 1'
    },
    {
      image: 'Slide2.avif',
      title: 'Slide 2 Title',
      description: 'Description for Slide 2'
    },
    {
      image:  'Slide3.avif',
      title: 'Slide 3 Title',
      description: 'Description for Slide 3'
    },
    {
      image:  'Slide4.avif',
      title: 'Slide 4 Title',
      description: 'Description for Slide 4'
    }
  ];
  
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }  
}

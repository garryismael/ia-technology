import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css',
})
export class SponsorsComponent {
  images = [
    '/assets/images/metro.png',
    '/assets/images/IBM.png',
    '/assets/images/TMM.png',
    '/assets/images/sapaad.png',
    '/assets/images/hobby-king.png',
    '/assets/images/omantel.png',
    '/assets/images/mobily.png',
    '/assets/images/causalcapital.png',
    '/assets/images/advendio.png',
    '/assets/images/spons-4.png',
    '/assets/images/opensooq.png',
    '/assets/images/spons-3.png'
  ];
}

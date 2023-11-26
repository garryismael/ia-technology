import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export type EventProp = {
  month: string;
  day: number;
  image: string;
  title: string;
  text: string;
};

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event!: EventProp;
}

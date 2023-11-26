import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EventCardComponent,
  EventProp,
} from '../../components/event-card/event-card.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  events: EventProp[] = [
    {
      month: 'APR',
      day: 14,
      image: '/assets/images/event-1.png',
      title: 'Lorem ipsum dolor sit amet consectetur. Mi massa.',
      text: 'We’ll get you directly seated and inside for you to enjoy the show.',
    },
    {
      month: 'APR',
      day: 14,
      image: '/assets/images/event-2.png',
      title: 'Lorem ipsum dolor sit amet consectetur. Mi massa.',
      text: 'We’ll get you directly seated and inside for you to enjoy the show.',
    },
    {
      month: 'APR',
      day: 14,
      image: '/assets/images/event-3.png',
      title: 'Lorem ipsum dolor sit amet consectetur. Mi massa.',
      text: 'We’ll get you directly seated and inside for you to enjoy the show.',
    },
    {
      month: 'APR',
      day: 14,
      image: '/assets/images/event-4.png',
      title: 'Lorem ipsum dolor sit amet consectetur. Mi massa.',
      text: 'We’ll get you directly seated and inside for you to enjoy the show.',
    },
  ];
}

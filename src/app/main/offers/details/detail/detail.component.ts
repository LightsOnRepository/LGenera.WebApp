import { Component, input, signal } from '@angular/core';
import { ServiceDescriptions } from '../details.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  thunderImage = signal({src: 'assets/thunder.svg', alt: 'Thunder'});
  serviceDescription = input.required<ServiceDescriptions>();
}

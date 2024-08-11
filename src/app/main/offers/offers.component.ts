import { ImageBaseComponent } from './image-base/image-base.component';
import { Image } from '../main.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [ImageBaseComponent, RouterLink, RouterOutlet, ButtonComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  title = signal("Чим ми можемо допомогти?");
  nameServiceButton = signal("Детальніше");
  isNavigateToDetails = signal(false);
  
  serviceImageList = signal<Image[]>([
    {src: 'assets/generator.svg', alt: 'hands with thunder', label: 'Підбір дизель генераторів та їх встановлення'},
    {src: 'assets/service_tools.svg', alt: 'Service tools', label: 'Обслуговування та діагностика енергетичного обладнання'},
  ]);

  constructor(private route: Router) {}
  
  toggleNavigation() {
    this.isNavigateToDetails() ? this.route.navigate(['/']) : this.route.navigate(['/details']);
    this.isNavigateToDetails.set(!this.isNavigateToDetails());
  }
}



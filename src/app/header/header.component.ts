import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal("LGenera");
  imagePath = signal({src: 'assets/logo.jpg', alt: 'LGenera logo'});
}

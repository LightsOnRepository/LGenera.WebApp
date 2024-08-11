import { Component, input} from '@angular/core';
import { Image } from '../../main.model';

@Component({
  selector: 'app-image-base',
  standalone: true,
  imports: [],
  templateUrl: './image-base.component.html',
  styleUrl: './image-base.component.css'
})
export class ImageBaseComponent {
  image = input.required<Image>();

}

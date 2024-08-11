import { Component, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { Image } from '../../main.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent implements OnInit{
  image = input.required<Image>();
  parsedPhones = signal<{ phoneNumber: string }[]>([]);

  ngOnInit() {
    if (this.isPhoneImage() && this.isImageLabelFill()) {
      let a = JSON.parse(this.image().label!)
      this.parsedPhones.set(a);
    }
  }

  isPhoneImage(): boolean {
    return this.image()?.alt === 'phone';
  }

  isImageLabelFill(): string | undefined {
    return this.image()?.label
  }

  onPhoneNumberClick(event: Event, phoneNumber: string): void {
    event.preventDefault();
    alert(`You are about to call ${phoneNumber}`);
    window.location.href = `tel:${phoneNumber}`;
  }
}

import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { ContactService } from './contacts.service';

interface GoogleMap {
  zoom: number,
  center: google.maps.LatLngLiteral 
}

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactInfoComponent, GoogleMapsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  title = signal("Контакти");
  googleMap = signal<GoogleMap>({zoom: 12, center: {
    lat: 49.80756640545204,
    lng: 23.90541449053451 
  }});

  private contactsService = inject(ContactService);
  private destroyRef = inject(DestroyRef);
  contactsInfo = this.contactsService.loadedContactsInfo;

  ngOnInit(): void {
    const subscribe = this.contactsService.getPhones().subscribe();
    
    this.destroyRef.onDestroy(() => {
      subscribe.unsubscribe();
    })
  }
}

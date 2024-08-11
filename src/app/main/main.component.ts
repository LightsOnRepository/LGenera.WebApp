import { Component } from '@angular/core';
import { OffersComponent } from "./offers/offers.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CallbackButtonComponent } from "./callback-button/callback-button.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [OffersComponent, ContactsComponent, CallbackButtonComponent]
})
export class MainComponent {

}

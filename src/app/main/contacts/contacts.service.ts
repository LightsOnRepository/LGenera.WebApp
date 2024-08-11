import { inject, Injectable, signal } from "@angular/core";
import { Image } from './../main.model';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";
interface Phone {
    phoneNumber: string
}
@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private httpClient = inject(HttpClient);
    private contactsInfo = signal<Image[]>([
        {src: 'assets/office.svg', alt: 'house', label: 'Львівський р-н с. Лапаївка,\n вул. Ярослава Мудрого'},
        {src: 'assets/boy_and_hand.svg', alt: 'Boy and hand', label: 'ГРАФІК РОБОТИ\n з 8:00 до 18:00 пн-нд'},
        {src: 'assets/mimi_phone.svg', alt: 'phone', label: ''}
      ]);

    loadedContactsInfo = this.contactsInfo.asReadonly();

    getPhones() {
        return this.httpClient.get<Phone[]>('https://api.lgenera.com/api/company-phone-numbers')
          .pipe(tap({
            next: (phones) => {
              const updatedContacts = this.contactsInfo().map(contact => {
                if (contact.alt === 'phone') {
                  return { ...contact, label: JSON.stringify(phones) };
                }
                return contact;
              });
              this.contactsInfo.set(updatedContacts);
            },
          }));
      }
}
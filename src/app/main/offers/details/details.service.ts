import { inject, Injectable, signal } from "@angular/core";
import { Image } from '../../main.model';
import { HttpClient } from "@angular/common/http";
import { ServiceDescriptions } from "./details.model";
import { tap } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class DetailService {
    private servicesDescriptions = signal<ServiceDescriptions[]>([]);
    private httpClient = inject(HttpClient);

    loadedServicesDescription = this.servicesDescriptions.asReadonly();

    getDetails() {
        return this.fetchDetails('https://api.lgenera.com/api/service-descriptions')
        .pipe(
            tap({
                next: (servicesDescriptions) => this.servicesDescriptions.set(servicesDescriptions),
            })
        );
    }

    fetchDetails(url: string) {
        return this.httpClient.get<ServiceDescriptions[]>(url);
    }
}
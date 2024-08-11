import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FormValue } from "./dialog-window.model";

@Injectable({
    providedIn: 'root'
})
export class DialogWindowService {
    private httpClient = inject(HttpClient);

    postRequest(value: FormValue) {
        return this.httpClient.post('https://api.lgenera.com/api/customers', value).pipe();
    }
}
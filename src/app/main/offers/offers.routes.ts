import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";

export const routes: Routes = [
    {
        path: 'details', //<your-domain>/details
        component: DetailsComponent,
        title: 'Services'
    }
];
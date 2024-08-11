import { Routes } from '@angular/router';
import { routes as offersRoutes} from './main/offers/offers.routes';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: offersRoutes,
        title: 'LGenera'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Not found'
    },
];

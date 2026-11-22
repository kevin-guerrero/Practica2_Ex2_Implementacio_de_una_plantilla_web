import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'historia',
        component: HistoriaComponent
    }
];

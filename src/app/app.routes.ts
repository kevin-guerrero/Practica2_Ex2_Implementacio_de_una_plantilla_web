import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'historia',
        component: HistoriaComponent
    },
    {
        path: 'peliculas',
        component: PeliculasComponent
    }
];

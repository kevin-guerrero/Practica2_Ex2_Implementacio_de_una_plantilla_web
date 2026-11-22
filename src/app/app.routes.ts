import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { JuegosComponent } from './juegos/juegos.component';

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
    },
    {
        path: 'juegos',
        component: JuegosComponent
    }
];

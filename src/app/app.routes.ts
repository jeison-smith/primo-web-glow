import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell.component';
import { ProyectosPageComponent } from './pages/proyectos/proyectos-page.component';
import { UsuariosPageComponent } from './pages/usuarios/usuarios-page.component';
import { CategoriasPageComponent } from './pages/categorias/categorias-page.component';
import { PlantillasPageComponent } from './pages/plantillas/plantillas-page.component';
import { GestionPageComponent } from './pages/gestion/gestion-page.component';
import { ReportesPageComponent } from './pages/reportes/reportes-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'proyectos' },
      { path: 'proyectos', component: ProyectosPageComponent, data: { title: 'Proyectos' } },
      { path: 'usuarios', component: UsuariosPageComponent, data: { title: 'Usuarios' } },
      { path: 'categorias', component: CategoriasPageComponent, data: { title: 'Categorías' } },
      { path: 'plantillas', component: PlantillasPageComponent, data: { title: 'Plantillas' } },
      { path: 'gestion', component: GestionPageComponent, data: { title: 'Gestión' } },
      { path: 'reportes', component: ReportesPageComponent, data: { title: 'Reportes' } },
      { path: '**', component: NotFoundPageComponent, data: { title: 'No encontrado' } },
    ],
  },
];

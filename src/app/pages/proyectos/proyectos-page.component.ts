import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { DataTableComponent, DataTableColumn } from '../../shared/data-table.component';
import { StatusBadgeComponent } from '../../shared/status-badge.component';
import { StatusToggleComponent } from '../../shared/status-toggle.component';
import { ButtonComponent } from '../../ui/button.component';
import { IconComponent } from '../../ui/icon.component';
import { signal } from '@angular/core';

interface Project {
  id: number;
  nombre: string;
  creador: string;
  fechaCreacion: string;
  ultActualizacion: string;
  activo: boolean;
}

const mockProjects: Project[] = [
  {
    id: 42,
    nombre: 'proyecto1767818104993',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: true,
  },
  {
    id: 41,
    nombre: 'proyecto1767817752087',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: true,
  },
  {
    id: 40,
    nombre: 'proyecto1767817254886',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: true,
  },
  {
    id: 39,
    nombre: 'proyecto1767816957068',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: true,
  },
  {
    id: 38,
    nombre: 'proyecto1767816887241',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: true,
  },
  {
    id: 37,
    nombre: 'proyecto1767801688129',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: false,
  },
  {
    id: 36,
    nombre: 'proyecto1767801578121',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: false,
  },
  {
    id: 35,
    nombre: 'proyecto1767801252029',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: false,
  },
  {
    id: 34,
    nombre: 'proyecto1767801039086',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: false,
  },
  {
    id: 33,
    nombre: 'Proyecto_Auto_1767128769283',
    creador: 'Jean Morales',
    fechaCreacion: '30/12/2025',
    ultActualizacion: '07/01/2026',
    activo: false,
  },
];

@Component({
  selector: 'app-proyectos-page',
  standalone: true,
  imports: [
    DataTableComponent,
    StatusBadgeComponent,
    StatusToggleComponent,
    ButtonComponent,
    IconComponent,
  ],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <app-button className="gap-2">
          <app-icon name="plus" [className]="'w-4 h-4'" />
          Crear proyecto
        </app-button>
      </div>

      <app-data-table [data]="projects()" [columns]="columns"></app-data-table>

      <ng-template #statusTemplate let-project>
        <div class="flex items-center gap-3">
          <app-status-badge [status]="project.activo ? 'active' : 'inactive'"></app-status-badge>
          <app-status-toggle
            [checked]="project.activo"
            label="Activar o desactivar proyecto"
          ></app-status-toggle>
        </div>
      </ng-template>

      <ng-template #actionTemplate>
        <app-button size="sm" className="gap-1">
          <app-icon name="plus" [className]="'w-4 h-4'" />
          Crear Categoría
        </app-button>
      </ng-template>
    </div>
  `,
})
export class ProyectosPageComponent implements OnInit {
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<{ $implicit: Project }>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<{ $implicit: Project }>;

  readonly projects = signal(mockProjects);

  columns: DataTableColumn<Project>[] = [];

  ngOnInit() {
    this.columns = [
      { key: 'id', header: 'Id', className: 'w-20 text-center' },
      { key: 'nombre', header: 'Nombre' },
      { key: 'creador', header: 'Creador' },
      { key: 'fechaCreacion', header: 'Fecha de creación', className: 'text-center' },
      { key: 'ultActualizacion', header: 'Últ. actualización', className: 'text-center' },
      {
        key: 'estado',
        header: 'Estado',
        template: this.statusTemplate,
      },
      {
        key: 'accion',
        header: 'Acción',
        template: this.actionTemplate,
      },
    ];
  }
}

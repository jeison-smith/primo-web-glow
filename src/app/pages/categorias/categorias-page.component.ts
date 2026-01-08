import { Component, TemplateRef, ViewChild, OnInit, signal } from '@angular/core';
import { DataTableComponent, DataTableColumn } from '../../shared/data-table.component';
import { StatusBadgeComponent } from '../../shared/status-badge.component';
import { StatusToggleComponent } from '../../shared/status-toggle.component';
import { ButtonComponent } from '../../ui/button.component';
import { IconComponent } from '../../ui/icon.component';

interface Categoria {
  id: number;
  nombre: string;
  proyecto: string;
  creador: string;
  fechaCreacion: string;
  ultActualizacion: string;
  activo: boolean;
}

const mockCategorias: Categoria[] = [
  {
    id: 45,
    nombre: 'categoria1767818104993',
    proyecto: 'proyecto1767818104993',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    activo: true,
  },
  {
    id: 44,
    nombre: 'categoria1767817752087',
    proyecto: 'proyecto1767817752087',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '-',
    activo: true,
  },
  {
    id: 43,
    nombre: 'categoria1767816887241',
    proyecto: 'proyecto1767816887241',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '-',
    activo: true,
  },
  {
    id: 42,
    nombre: 'categoria1767801688129',
    proyecto: 'proyecto1767801688129',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '-',
    activo: true,
  },
  {
    id: 41,
    nombre: 'categoria1767801578121',
    proyecto: 'proyecto1767801578121',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '-',
    activo: true,
  },
  {
    id: 38,
    nombre: 'Cherolet',
    proyecto: 'Carros',
    creador: 'Kevin Oliveros',
    fechaCreacion: '06/01/2026',
    ultActualizacion: '06/01/2026',
    activo: false,
  },
  {
    id: 37,
    nombre: 'Categoria_Auto_1767128769283',
    proyecto: 'Proyecto_Auto_1767128769283',
    creador: 'Jean Morales',
    fechaCreacion: '30/12/2025',
    ultActualizacion: '-',
    activo: true,
  },
  {
    id: 36,
    nombre: 'Prueba_nombre',
    proyecto: 'Proyecto_Auto_1766767422613',
    creador: 'Jean Morales',
    fechaCreacion: '29/12/2025',
    ultActualizacion: '29/12/2025',
    activo: false,
  },
];

@Component({
  selector: 'app-categorias-page',
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
          Crear Categoría
        </app-button>
      </div>

      <app-data-table [data]="categorias()" [columns]="columns"></app-data-table>

      <ng-template #statusTemplate let-categoria>
        <div class="flex items-center gap-3">
          <app-status-badge [status]="categoria.activo ? 'active' : 'inactive'"></app-status-badge>
          <app-status-toggle
            [checked]="categoria.activo"
            label="Activar o desactivar proyecto"
          ></app-status-toggle>
        </div>
      </ng-template>

      <ng-template #actionTemplate>
        <app-button size="sm" variant="outline" className="gap-1">
          <app-icon name="plus" [className]="'w-4 h-4'" />
          Crear Plantilla
        </app-button>
      </ng-template>
    </div>
  `,
})
export class CategoriasPageComponent implements OnInit {
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<{ $implicit: Categoria }>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<{ $implicit: Categoria }>;

  readonly categorias = signal(mockCategorias);
  columns: DataTableColumn<Categoria>[] = [];

  ngOnInit() {
    this.columns = [
      { key: 'id', header: 'Id', className: 'w-16 text-center' },
      { key: 'nombre', header: 'Nombre' },
      { key: 'proyecto', header: 'Proyecto' },
      { key: 'creador', header: 'Creador', className: 'text-center' },
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

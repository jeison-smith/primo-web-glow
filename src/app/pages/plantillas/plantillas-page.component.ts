import { Component, TemplateRef, ViewChild, OnInit, signal } from '@angular/core';
import { DataTableComponent, DataTableColumn } from '../../shared/data-table.component';
import { StatusBadgeComponent } from '../../shared/status-badge.component';
import { ButtonComponent } from '../../ui/button.component';
import { IconComponent } from '../../ui/icon.component';

interface Plantilla {
  id: number;
  nombre: string;
  proyecto: string;
  categoria: string;
  creador: string;
  fechaCreacion: string;
  ultActualizacion: string;
  gestiones: number;
  activo: boolean;
}

const mockPlantillas: Plantilla[] = [
  {
    id: 29,
    nombre: 'plantilla1767818104993',
    proyecto: 'proyecto1767818104993',
    categoria: 'categoria1767818104993',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    gestiones: 0,
    activo: true,
  },
  {
    id: 28,
    nombre: 'plantilla1767816887241',
    proyecto: 'proyecto1767816887241',
    categoria: 'categoria1767816887241',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    gestiones: 0,
    activo: true,
  },
  {
    id: 27,
    nombre: 'plantilla1767801688129',
    proyecto: 'proyecto1767801688129',
    categoria: 'categoria1767801688129',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    gestiones: 0,
    activo: false,
  },
  {
    id: 26,
    nombre: 'plantilla1767801578121',
    proyecto: 'proyecto1767801578121',
    categoria: 'categoria1767801578121',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    gestiones: 0,
    activo: false,
  },
  {
    id: 25,
    nombre: 'plantilla1767801252029',
    proyecto: 'proyecto1767801252029',
    categoria: 'categoria1767801252029',
    creador: 'Jean Morales',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    gestiones: 0,
    activo: false,
  },
  {
    id: 23,
    nombre: 'zapatos',
    proyecto: 'Prueba1',
    categoria: 'Prueba_nombre',
    creador: 'Waldo Castro',
    fechaCreacion: '07/01/2026',
    ultActualizacion: '07/01/2026',
    gestiones: 2,
    activo: true,
  },
  {
    id: 22,
    nombre: 'Llantas Cherolet',
    proyecto: 'Carros',
    categoria: 'Cherolet',
    creador: 'Kevin Oliveros',
    fechaCreacion: '06/01/2026',
    ultActualizacion: '06/01/2026',
    gestiones: 3,
    activo: false,
  },
  {
    id: 20,
    nombre: 'mazda',
    proyecto: 'Proyecto_Auto_1766761533690',
    categoria: 'abc',
    creador: 'Waldo Castro',
    fechaCreacion: '30/12/2025',
    ultActualizacion: '30/12/2025',
    gestiones: 0,
    activo: true,
  },
];

@Component({
  selector: 'app-plantillas-page',
  standalone: true,
  imports: [DataTableComponent, StatusBadgeComponent, ButtonComponent, IconComponent],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <app-button className="gap-2">
          <app-icon name="plus" [className]="'w-4 h-4'" />
          Crear plantilla
        </app-button>
      </div>

      <app-data-table [data]="plantillas()" [columns]="columns"></app-data-table>

      <ng-template #statusTemplate let-plantilla>
        <app-status-badge [status]="plantilla.activo ? 'active' : 'inactive'"></app-status-badge>
      </ng-template>
    </div>
  `,
})
export class PlantillasPageComponent implements OnInit {
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<{ $implicit: Plantilla }>;

  readonly plantillas = signal(mockPlantillas);
  columns: DataTableColumn<Plantilla>[] = [];

  ngOnInit() {
    this.columns = [
      { key: 'id', header: 'N° Plantilla', className: 'w-24 text-center' },
      { key: 'nombre', header: 'Nombre' },
      { key: 'proyecto', header: 'Proyecto' },
      { key: 'categoria', header: 'Categoría' },
      { key: 'creador', header: 'Creador', className: 'text-center' },
      { key: 'fechaCreacion', header: 'Fecha de creación', className: 'text-center' },
      { key: 'ultActualizacion', header: 'Últ. actualización', className: 'text-center' },
      { key: 'gestiones', header: 'Gestiones', className: 'text-center' },
      {
        key: 'estado',
        header: 'Estado',
        template: this.statusTemplate,
      },
    ];
  }
}

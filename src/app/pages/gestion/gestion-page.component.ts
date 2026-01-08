import { Component, TemplateRef, ViewChild, OnInit, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataTableComponent, DataTableColumn } from '../../shared/data-table.component';
import { StatusBadgeComponent } from '../../shared/status-badge.component';
import { ButtonComponent } from '../../ui/button.component';
import { IconComponent } from '../../ui/icon.component';
import {
  CardComponent,
  CardContentComponent,
  CardDescriptionComponent,
  CardHeaderComponent,
  CardTitleComponent,
} from '../../ui/card.component';
import { SelectComponent } from '../../ui/select.component';

interface Caso {
  id: number;
  idCaso: number;
  nombrePlantilla: string;
  fechaInicio: string;
  fechaUltActualizacion: string;
  estado: 'open' | 'pending' | 'active';
}

const proyectos = [
  'proyecto1767818104993',
  'proyecto1767817752087',
  'proyecto1767817254886',
  'proyecto1767816957068',
  'proyecto1767816887241',
  'proyecto1768016881212',
];

const mockCasos: Caso[] = [
  {
    id: 1,
    idCaso: 0,
    nombrePlantilla: 'Marca tv',
    fechaInicio: '15/12/2025',
    fechaUltActualizacion: '15/12/2025',
    estado: 'open',
  },
  {
    id: 2,
    idCaso: 0,
    nombrePlantilla: 'modelo hg',
    fechaInicio: '15/12/2025',
    fechaUltActualizacion: '15/12/2025',
    estado: 'open',
  },
  {
    id: 3,
    idCaso: 0,
    nombrePlantilla: 'modelo hg',
    fechaInicio: '26/12/2025',
    fechaUltActualizacion: '26/12/2025',
    estado: 'open',
  },
  {
    id: 4,
    idCaso: 0,
    nombrePlantilla: 'Marca tv',
    fechaInicio: '26/12/2025',
    fechaUltActualizacion: '26/12/2025',
    estado: 'open',
  },
  {
    id: 5,
    idCaso: 0,
    nombrePlantilla: 'Marca tv',
    fechaInicio: '30/12/2025',
    fechaUltActualizacion: '30/12/2025',
    estado: 'open',
  },
];

@Component({
  selector: 'app-gestion-page',
  standalone: true,
  imports: [
    NgFor,
    DataTableComponent,
    StatusBadgeComponent,
    ButtonComponent,
    IconComponent,
    CardComponent,
    CardContentComponent,
    CardDescriptionComponent,
    CardHeaderComponent,
    CardTitleComponent,
    SelectComponent,
  ],
  template: `
    <div class="space-y-6">
      <app-card>
        <app-card-header>
          <app-card-title>Plantillas y Categorias</app-card-title>
          <app-card-description>
            Selecciona la categoría y luego la plantilla en la lista desplegable.
          </app-card-description>
        </app-card-header>
        <app-card-content [className]="'space-y-4'">
          <div class="flex flex-wrap gap-2">
            <app-button
              *ngFor="let proyecto of proyectos"
              size="sm"
              [variant]="proyecto === selectedProyecto() ? 'default' : 'outline'"
              className="rounded-full"
              (click)="selectProyecto(proyecto)"
            >
              {{ proyecto }}
            </app-button>
          </div>

          <div class="max-w-md">
            <app-select
              placeholder="Buscar y seleccionar Plantilla..."
              [options]="plantillasOptions"
            ></app-select>
          </div>
        </app-card-content>
      </app-card>

      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-foreground">Mis casos</h2>
        <app-data-table [data]="casos()" [columns]="columns"></app-data-table>
      </div>

      <ng-template #statusTemplate let-caso>
        <app-status-badge [status]="caso.estado" label="Abierto"></app-status-badge>
      </ng-template>

      <ng-template #actionTemplate>
        <app-button variant="ghost" size="icon">
          <app-icon name="more-horizontal" [className]="'w-4 h-4'" />
        </app-button>
      </ng-template>
    </div>
  `,
})
export class GestionPageComponent implements OnInit {
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<{ $implicit: Caso }>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<{ $implicit: Caso }>;

  readonly proyectos = proyectos;
  readonly selectedProyecto = signal(proyectos[0]);
  readonly casos = signal(mockCasos);

  readonly plantillasOptions = [
    { value: 'plantilla1', label: 'plantilla1767818104993' },
    { value: 'plantilla2', label: 'plantilla1767817752087' },
    { value: 'plantilla3', label: 'plantilla1767816887241' },
  ];

  columns: DataTableColumn<Caso>[] = [];

  ngOnInit() {
    this.columns = [
      { key: 'idCaso', header: 'ID caso', className: 'text-center' },
      { key: 'nombrePlantilla', header: 'Nombre plantilla', className: 'text-center' },
      { key: 'fechaInicio', header: 'Fecha de inicio', className: 'text-center' },
      { key: 'fechaUltActualizacion', header: 'Fecha últ. actualización', className: 'text-center' },
      {
        key: 'estado',
        header: 'Estado',
        className: 'text-center',
        template: this.statusTemplate,
      },
      {
        key: 'accion',
        header: 'Acción',
        className: 'text-center',
        template: this.actionTemplate,
      },
    ];
  }

  selectProyecto(proyecto: string) {
    this.selectedProyecto.set(proyecto);
  }
}

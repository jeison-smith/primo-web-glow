import { Component, TemplateRef, ViewChild, OnInit, signal } from '@angular/core';
import { DataTableComponent, DataTableColumn } from '../../shared/data-table.component';
import { ButtonComponent } from '../../ui/button.component';
import { IconComponent } from '../../ui/icon.component';
import { DropdownMenuComponent } from '../../ui/dropdown-menu.component';

interface Usuario {
  id: number;
  rol: string;
  identificacion: string;
  nombre: string;
  cargo: string;
  fechaCreacion: string;
}

const mockUsuarios: Usuario[] = [
  {
    id: 1,
    rol: 'Administrativo',
    identificacion: '1045711935',
    nombre: 'Jeison Parada',
    cargo: 'Ingeniero De Qa',
    fechaCreacion: '29/12/2025',
  },
  {
    id: 2,
    rol: 'Administrativo',
    identificacion: '1002488360',
    nombre: 'Kevin Oliveros',
    cargo: 'Analista De Tesoreria',
    fechaCreacion: '29/12/2025',
  },
  {
    id: 3,
    rol: 'Operativo',
    identificacion: '72307826',
    nombre: 'Rodolfo Rodriguez',
    cargo: 'Ingeniero De Desarrollo Lider',
    fechaCreacion: '29/12/2025',
  },
  {
    id: 4,
    rol: 'Administrativo',
    identificacion: '1002024717',
    nombre: 'Waldo Castro',
    cargo: 'Ingeniero De Desarrollo Junior',
    fechaCreacion: '24/11/2025',
  },
  {
    id: 5,
    rol: 'Administrativo',
    identificacion: '1002001071',
    nombre: 'Jean Morales',
    cargo: 'Presidente',
    fechaCreacion: '24/11/2025',
  },
];

@Component({
  selector: 'app-usuarios-page',
  standalone: true,
  imports: [DataTableComponent, ButtonComponent, IconComponent, DropdownMenuComponent],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <app-button className="gap-2">
          <app-icon name="plus" [className]="'w-4 h-4'" />
          Añadir usuario
        </app-button>
      </div>

      <app-data-table [data]="usuarios()" [columns]="columns"></app-data-table>

      <ng-template #actionTemplate>
        <app-dropdown>
          <app-button dropdown-trigger variant="ghost" size="icon">
            <app-icon name="more-horizontal" [className]="'w-4 h-4'" />
          </app-button>
          <div dropdown-content class="w-48">
            <button class="dropdown-item">Editar</button>
            <button class="dropdown-item">Ver detalles</button>
            <button class="dropdown-item text-destructive">Eliminar</button>
          </div>
        </app-dropdown>
      </ng-template>
    </div>
  `,
})
export class UsuariosPageComponent implements OnInit {
  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<{ $implicit: Usuario }>;

  readonly usuarios = signal(mockUsuarios);
  columns: DataTableColumn<Usuario>[] = [];

  ngOnInit() {
    this.columns = [
      { key: 'rol', header: 'Rol', className: 'text-center' },
      { key: 'identificacion', header: 'Identificación', className: 'text-center' },
      { key: 'nombre', header: 'Nombre usuario', className: 'text-center' },
      { key: 'cargo', header: 'Cargo', className: 'text-center' },
      { key: 'fechaCreacion', header: 'Fecha creación', className: 'text-center' },
      {
        key: 'accion',
        header: 'Acción',
        className: 'text-center',
        template: this.actionTemplate,
      },
    ];
  }
}

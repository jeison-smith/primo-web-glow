import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button.component';
import { IconComponent } from '../../ui/icon.component';
import { CardComponent, CardContentComponent } from '../../ui/card.component';
import { LabelComponent } from '../../ui/label.component';
import { SelectComponent } from '../../ui/select.component';
import { InputComponent } from '../../ui/input.component';

@Component({
  selector: 'app-reportes-page',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
    CardComponent,
    CardContentComponent,
    LabelComponent,
    SelectComponent,
    InputComponent,
  ],
  template: `
    <div class="space-y-6">
      <app-card>
        <app-card-content [className]="'pt-6'">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div class="space-y-2">
              <app-label>Plantilla</app-label>
              <app-select
                placeholder="Seleccionar plantilla"
                [options]="plantillaOptions"
              ></app-select>
            </div>

            <div class="space-y-2">
              <app-label>Fecha inicio</app-label>
              <app-input type="date" value="2026-01-01"></app-input>
            </div>

            <div class="space-y-2">
              <app-label>Fecha fin</app-label>
              <app-input type="date" value="2026-01-08"></app-input>
            </div>

            <div class="space-y-2">
              <app-label>Estado</app-label>
              <app-select [options]="estadoOptions"></app-select>
            </div>

            <div>
              <app-button className="w-full gap-2 bg-success hover:bg-success/90">
                <app-icon name="download" [className]="'w-4 h-4'" />
                Descargar información
              </app-button>
            </div>
          </div>
        </app-card-content>
      </app-card>

      <app-card>
        <app-card-content [className]="'py-24'">
          <div class="text-center text-muted-foreground">
            <p class="text-lg">Selecciona los filtros y descarga el reporte</p>
            <p class="text-sm mt-2">Los datos se exportarán en formato Excel</p>
          </div>
        </app-card-content>
      </app-card>
    </div>
  `,
})
export class ReportesPageComponent {
  readonly plantillaOptions = [
    { value: 'plantilla1', label: 'plantilla1767818104993' },
    { value: 'plantilla2', label: 'plantilla1767817752087' },
    { value: 'plantilla3', label: 'plantilla1767816887241' },
  ];

  readonly estadoOptions = [
    { value: 'activo', label: 'Activo' },
    { value: 'inactivo', label: 'Inactivo' },
    { value: 'todos', label: 'Todos' },
  ];
}

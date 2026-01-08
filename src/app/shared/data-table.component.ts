import { Component, Input, TemplateRef } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet, NgClass } from '@angular/common';

export interface DataTableColumn<T> {
  key: keyof T | string;
  header: string;
  className?: string;
  template?: TemplateRef<{ $implicit: T }>;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, NgClass],
  template: `
    <div class="overflow-x-auto">
      <table class="data-table">
        <thead>
          <tr>
            <th *ngFor="let column of columns" [ngClass]="column.className">{{ column.header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of data">
            <td *ngFor="let column of columns" [ngClass]="column.className">
              <ng-container
                *ngIf="column.template; else defaultCell"
                [ngTemplateOutlet]="column.template"
                [ngTemplateOutletContext]="{ $implicit: row }"
              ></ng-container>
              <ng-template #defaultCell>{{ row[column.key as keyof typeof row] }}</ng-template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class DataTableComponent<T extends Record<string, unknown>> {
  @Input({ required: true }) data: T[] = [];
  @Input({ required: true }) columns: DataTableColumn<T>[] = [];
}

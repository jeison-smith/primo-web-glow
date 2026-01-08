import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  template: `
    <select class="input-field" [ngClass]="className">
      <option *ngIf="placeholder" value="" disabled selected>{{ placeholder }}</option>
      <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
    </select>
  `,
})
export class SelectComponent {
  @Input() options: SelectOption[] = [];
  @Input() placeholder = '';
  @Input() className = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      [value]="value"
      class="input-field"
    />
  `,
})
export class InputComponent {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';
}

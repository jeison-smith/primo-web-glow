import { Component } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  template: `
    <label class="text-sm font-medium text-foreground">
      <ng-content />
    </label>
  `,
})
export class LabelComponent {}

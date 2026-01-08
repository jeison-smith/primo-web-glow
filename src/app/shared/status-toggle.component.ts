import { Component, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-status-toggle',
  standalone: true,
  imports: [NgClass],
  template: `
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        [checked]="checked"
        (change)="toggle($event)"
        class="toggle-input"
      />
      <span class="text-sm text-muted-foreground">{{ label }}</span>
    </label>
  `,
})
export class StatusToggleComponent {
  @Input() checked = false;
  @Input() label = 'Activar o desactivar';

  readonly checkedSignal = signal(this.checked);

  toggle(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedSignal.set(target.checked);
  }
}

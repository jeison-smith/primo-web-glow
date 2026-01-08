import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  template: `<div class="card-elevated" [ngClass]="className">
    <ng-content />
  </div>`,
})
export class CardComponent {
  @Input() className = '';
}

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [NgClass],
  template: `<div class="px-6 py-4 border-b border-border/50" [ngClass]="className">
    <ng-content />
  </div>`,
})
export class CardHeaderComponent {
  @Input() className = '';
}

@Component({
  selector: 'app-card-title',
  standalone: true,
  template: `<h3 class="text-lg font-semibold text-foreground">
    <ng-content />
  </h3>`,
})
export class CardTitleComponent {}

@Component({
  selector: 'app-card-description',
  standalone: true,
  template: `<p class="text-sm text-muted-foreground">
    <ng-content />
  </p>`,
})
export class CardDescriptionComponent {}

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [NgClass],
  template: `<div class="p-6" [ngClass]="className">
    <ng-content />
  </div>`,
})
export class CardContentComponent {
  @Input() className = '';
}

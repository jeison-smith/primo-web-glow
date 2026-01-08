import { Component, ElementRef, HostListener, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="relative inline-block">
      <div (click)="toggle()">
        <ng-content select="[dropdown-trigger]" />
      </div>
      <div
        *ngIf="open()"
        class="absolute right-0 mt-2 rounded-lg border border-border bg-card shadow-lg z-20"
      >
        <ng-content select="[dropdown-content]" />
      </div>
    </div>
  `,
})
export class DropdownMenuComponent {
  readonly open = signal(false);

  constructor(private elementRef: ElementRef) {}

  toggle() {
    this.open.update((value) => !value);
  }

  close() {
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    if (target && !this.elementRef.nativeElement.contains(target)) {
      this.close();
    }
  }
}

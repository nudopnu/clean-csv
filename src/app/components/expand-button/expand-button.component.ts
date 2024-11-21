import { Component, ElementRef, model, ViewChild } from '@angular/core';

@Component({
  selector: 'app-expand-button',
  standalone: true,
  imports: [],
  templateUrl: './expand-button.component.html',
  styleUrl: './expand-button.component.css'
})
export class ExpandButtonComponent {
  @ViewChild('collapse') collapseElementRef!: ElementRef;
  @ViewChild('expand') expandElementRef!: ElementRef;

  expanded = model(false);

  toggle() {
    this.collapseElementRef.nativeElement.classList.toggle('hidden');
    this.expandElementRef.nativeElement.classList.toggle('hidden');
    this.expanded.update(v => !v);
  }
}

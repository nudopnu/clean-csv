import { AfterViewInit, ChangeDetectorRef, Component, computed, effect, ElementRef, inject, input, Input, model, signal, ViewChild } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-mermaid',
  standalone: true,
  imports: [],
  templateUrl: './mermaid.component.html',
  styleUrl: './mermaid.component.css'
})
export class MermaidComponent {

  @ViewChild('svg') svgElementRef!: ElementRef<SVGElement>;
  @ViewChild('container') containerElementRef!: ElementRef<SVGElement>;

  mermaid = model(`
xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar "Series 1" [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    bar "Series 2" [10500, 11000, 10200, 9200, 8500, 7000, 6000, 5000, 6000, 7500, 8200, 9500]
`);
  code = signal("");
  cdr = inject(ChangeDetectorRef);

  constructor() {
    mermaid.initialize({
      startOnLoad: false, // Disable automatic rendering
      theme: 'base',      // Customize your theme
      securityLevel: 'loose' // Adjust security settings if needed
    });
    effect(async () => {
      const diagram = await mermaid.render('graphDiv', this.mermaid());
      this.containerElementRef.nativeElement.innerHTML = diagram.svg;
    });
  }

}

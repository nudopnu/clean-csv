import { Component, effect, model, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CodeComponent } from "./components/code/code.component";
import { DarkModeToggleComponent } from "./components/dark-mode-toggle/dark-mode-toggle.component";
import { FileInputComponent } from "./components/file-input/file-input.component";
import { LabelComponent } from "./components/label/label.component";
import { MermaidComponent } from "./components/mermaid/mermaid.component";
import { TableComponent } from "./components/table/table.component";
import { CsvDetector } from './lib/csv-detector';
import { CsvParser } from './lib/csv-parser';
import { getEncodings, readFileContent } from './lib/utils';
import { getMockFile } from './mocks/mock-file';
import { ExpandButtonComponent } from "./components/expand-button/expand-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, CodeComponent, FileInputComponent, LabelComponent, MermaidComponent, DarkModeToggleComponent, TableComponent, ExpandButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  file = signal<File | undefined>(undefined);
  rows = signal<string[][] | undefined>(undefined);
  skipLines = model(0);
  expanded = model(false);

  constructor() {
    effect(async () => {
      const file = this.file();
      if (!file) { return; }
      const encodings = await getEncodings(file);
      const content = await readFileContent(file);
      const lines = content.split("\n");
      const csvSpecs = new CsvDetector().detect(lines);
      const csvParser = new CsvParser(csvSpecs);
      const skipLines = await csvParser.detectSkipLinesFromFile(file);
      const rows = await csvParser.parseFile(file, encodings[0].name);
      this.skipLines.set(skipLines);
      this.rows.set(rows);
      console.log(encodings[0], csvSpecs);
    });
  }

  async ngOnInit() {
    initFlowbite();
    // const file = await getMockFile();
    // this.file.set(file);
  }

  onFileReceived(file: File) {
    this.file.set(file);
  }
}

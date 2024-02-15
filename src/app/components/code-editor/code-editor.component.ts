import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CodeJar } from 'codejar';
import { CsvDetector } from '../../lib/csv-detector';
import { CsvSpecs } from '../../models/csv-specs.model';

@Component({
  selector: 'csv-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss'
})
export class CodeEditorComponent implements AfterContentInit, AfterViewInit {

  @Input() code: string = "";
  @ViewChild('editor') editorElementRef!: ElementRef;
  csvSpecs!: CsvSpecs;

  rainbow = (line: string, lineIdx: number) => {
    const { delimiter, numberOfColumns } = this.csvSpecs;
    let occurences = 0;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === delimiter) {
        occurences++;
      }
    }
    if (occurences === numberOfColumns) {
      const splits = line.split(delimiter);
      let result = "";
      for (let i = 0; i < splits.length; i++) {
        const split = splits[i];
        if (split.trim() === "") continue;
        let red = Math.round(Math.sin(0.6 * i + 0) * 127 + 128);
        let green = Math.round(Math.sin(0.6 * i + 2 * Math.PI / 3) * 127 + 128);
        let blue = Math.round(Math.sin(0.6 * i + 4 * Math.PI / 3) * 127 + 128);
        result += `<span style="color: rgb(${red}, ${green}, ${blue})">${split}${delimiter}</span>`;
      }
      return `${result}\n`;
    }
    return `<span style="color: lightgrey; text-decoration: line-through;">${line}</span>\n`;
  };

  lolcat = (editor: any) => {
    const textContent = editor.textContent;
    const appendNewLineAtEnd = textContent.endsWith('\n');
    let code = textContent
      .split('\n')
      .map(this.rainbow)
      .join('');

    if (appendNewLineAtEnd) {
      code += "\n";
    }
    editor.innerHTML = code;
  };

  ngAfterContentInit(): void {
    const csvDetector = new CsvDetector();
    this.csvSpecs = csvDetector.detect(this.code.split('\n'));
    console.log(this.csvSpecs);
  }

  ngAfterViewInit(): void {
    const editor = this.editorElementRef.nativeElement;
    const jar = CodeJar(editor, this.lolcat);
    jar.updateCode(this.code);
  }
}

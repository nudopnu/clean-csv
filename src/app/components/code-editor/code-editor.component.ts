import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CodeJar } from 'codejar';

@Component({
  selector: 'csv-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss'
})
export class CodeEditorComponent implements AfterViewInit {
  @Input() code: string = "";
  @ViewChild('editor') editorElementRef!: ElementRef;

  rainbow = (line: any, lineIdx: number) => {
    let red = Math.round(Math.sin(0.6 * lineIdx + 0) * 127 + 128);
    let green = Math.round(Math.sin(0.6 * lineIdx + 2 * Math.PI / 3) * 127 + 128);
    let blue = Math.round(Math.sin(0.6 * lineIdx + 4 * Math.PI / 3) * 127 + 128);
    return `<span style="color: rgb(${red}, ${green}, ${blue})">${line}\n</span>`;
  };

  lolcat = (editor: any) => {
    const textContent = editor.textContent;
    const appendNewLineAtEnd = textContent.endsWith('\n');
    let code = textContent
      .split('\n')
      .map(this.rainbow)
      .join('');

    if (appendNewLineAtEnd) {
      code += "'\n";
    }
    editor.innerHTML = code;
  };

  ngAfterViewInit(): void {
    const editor = this.editorElementRef.nativeElement;
    const jar = CodeJar(editor, this.lolcat);
    jar.updateCode(this.code);
  }
}

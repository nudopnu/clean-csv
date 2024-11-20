import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css'
})
export class FileInputComponent {

  @Output()
  onFileReceived = new EventEmitter<File>();

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragEnd(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files.item(0);
    if (!file) { return; }
    this.onFileReceived.emit(file);
  }

  onChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.item(0);
    if (!file) { return; }
    this.onFileReceived.emit(file);
  }

}

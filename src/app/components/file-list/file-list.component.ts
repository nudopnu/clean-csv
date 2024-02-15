import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileItem } from '../../models/file-item.model';

@Component({
  selector: 'csv-file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {

  @Input() fileItems!: FileItem[];
  @Output() onSelect = new EventEmitter<FileItem>();
  @Output() onDelete = new EventEmitter<FileItem>();

  onChangeEncoding(fileItem: FileItem, encoding: string) {
    fileItem.selectedEncodingIndex = fileItem.encodings.indexOf(encoding);
  }

}

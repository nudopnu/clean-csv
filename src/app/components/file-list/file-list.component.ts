import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileItem } from '../../models/file-item.model';
import { RemoveFileItemAction } from '../../models/state-actions.model';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'csv-file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {

  @Input() fileItems!: FileItem[];

  constructor(private stateService: StateService) { }

  onChangeEncoding(fileItem: FileItem, encoding: string) {
    fileItem.selectedEncodingIndex = fileItem.encodings.indexOf(encoding);
  }

  onDelete(fileItem: FileItem) {
    const removeFileItemAction = new RemoveFileItemAction(fileItem);
    this.stateService.submit(removeFileItemAction);
  }

}

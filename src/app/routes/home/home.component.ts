import { Component } from '@angular/core';
import { getEncodings } from '../../lib/utils';
import { FileItem } from '../../models/file-item.model';
import { AddFileItemAction, ProcessFileAction, RemoveFileItemAction } from '../../models/state-actions.model';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'csv-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public stateService: StateService) { }

  async onFileUpload(file: File) {
    const encodings = await getEncodings(file);
    const fileItem = {
      filename: file.name,
      encodings: encodings.map(encoding => encoding.name),
      selectedEncodingIndex: 0,
      file
    } as FileItem;
    const addFileAction = new AddFileItemAction(fileItem);
    const processFileAction = new ProcessFileAction(fileItem);
    this.stateService.submit(addFileAction);
    this.stateService.submit(processFileAction);
  }

  onFileDelete(fileItem: FileItem) {
    const removeFileAction = new RemoveFileItemAction(fileItem);
    this.stateService.submit(removeFileAction);
  }
}
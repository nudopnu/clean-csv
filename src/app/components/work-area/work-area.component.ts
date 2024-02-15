import { Component, input } from '@angular/core';
import { MOCK } from '../../lib/mock';
import { readFileContent } from '../../lib/utils';
import { FileItem } from '../../models/file-item.model';

@Component({
  selector: 'csv-work-area',
  templateUrl: './work-area.component.html',
  styleUrl: './work-area.component.scss'
})
export class WorkAreaComponent {

  fileContent = input.required({
    alias: 'fileItem',
    transform: this.transform
  });

  async transform(fileItem: FileItem) {
    const file = fileItem.file;
    const encoding = fileItem.encodings[fileItem.selectedEncodingIndex];
    if (!file) {
      return MOCK.FILE_CONTENT;
    }
    return await readFileContent(file!, encoding);
  }

}

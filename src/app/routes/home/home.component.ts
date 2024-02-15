import { Component } from '@angular/core';
import { getEncodings, readFileContent } from '../../lib/utils';
import { FileItem } from '../../models/file-item.model';

@Component({
  selector: 'csv-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  fileItems: FileItem[] = [
    { encodings: ['utf8', 'windows'], filename: 'test.csv', selectedEncodingIndex: 0 },
  ];
  selectedFileItem: FileItem | undefined = this.fileItems[0];

  async onFileUpload(file: File) {
    const encodings = await getEncodings(file);
    const encoding = encodings[0].name;
    const fileItem = { filename: file.name, encodings: encodings.map(encoding => encoding.name), selectedEncodingIndex: 0 } as FileItem;
    this.fileItems.push(fileItem);
    const fileContent = await readFileContent(file, encoding);
    console.log(fileContent);
  }

  onFileDelete(fileItem: FileItem) {
    this.fileItems = this.fileItems.filter(item => item !== fileItem);
  }
}
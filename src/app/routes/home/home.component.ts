import { Component } from '@angular/core';
import { getEncodings, readFileContent } from '../../lib/utils';

@Component({
  selector: 'csv-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  async onFileUpload(file: File) {
    const encodings = await getEncodings(file);
    const encoding = encodings[0].name;
    const fileContent = await readFileContent(file, encoding);
    console.log(fileContent);
  }

}
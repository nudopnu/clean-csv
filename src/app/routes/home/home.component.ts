import { Component } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'csv-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  onFileUpload(file: NzUploadFile) {
    console.log(file);
    return "";
  }
  
  onUpload(item: any) {
    console.log(item);
    return {} as any;
  }
}

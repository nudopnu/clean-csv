import { Component, EventEmitter, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'csv-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

  @Output()
  onFileUpload = new EventEmitter<File>;

  onAction = (file: NzUploadFile) => {
    this.onFileUpload.emit(file as any as File);
    return "";
  }

}

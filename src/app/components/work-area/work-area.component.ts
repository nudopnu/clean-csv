import { Component, Input } from '@angular/core';
import { FileItem } from '../../models/file-item.model';

@Component({
  selector: 'csv-work-area',
  templateUrl: './work-area.component.html',
  styleUrl: './work-area.component.scss'
})
export class WorkAreaComponent {

  @Input() fileItem!: FileItem;

  fileContent = "";


}

import { Component, Input, input } from '@angular/core';
import { MOCK } from '../../lib/mock';
import { readFileContent } from '../../lib/utils';
import { FileItem } from '../../models/file-item.model';
import { CsvDetector } from '../../lib/csv-detector';
import { ProcessedFileItem } from '../../models/processed-file-item.model';

@Component({
  selector: 'csv-work-area',
  templateUrl: './work-area.component.html',
  styleUrl: './work-area.component.scss'
})
export class WorkAreaComponent {

  @Input() processedFileItem!: ProcessedFileItem

}

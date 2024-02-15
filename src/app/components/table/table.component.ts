import { Component } from '@angular/core';

@Component({
  selector: 'csv-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  listOfData: any[] = [];
  listOfColumns: any;
}

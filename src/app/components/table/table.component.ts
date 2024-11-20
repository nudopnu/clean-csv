import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { Table, TableModule } from 'primeng/table';

interface Column {
  field: number;
  header: string;
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, MultiSelectModule, FormsModule, InputNumberModule, ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  rows = input.required<string[][]>();
  skipLines = model(0);

  cols = computed(() => {
    const rows = this.rows();
    const skipLines = this.skipLines();
    if (rows.length + skipLines < 2) return [];
    return rows[skipLines].map((field, idx) => ({ field: idx, header: field.toLocaleUpperCase()[0] + field.slice(1) }));
  });
  values = computed(() => {
    const rows = this.rows();
    const skipLines = this.skipLines();
    if (rows.length + skipLines < 2) return [];
    return rows.slice(skipLines + 1);
  });

  _selectedColumns: Column[] = [];

  constructor() {
    effect(() => {
      this.selectedColumns = this.cols();
    });
  }

  export(table: Table) {
    console.log(table.columns);
    const rows = table.processedData;
    let result = "";
    /* Add header */
    for (let i = 0; i < this.selectedColumns.length; i++) {
      const column = this.selectedColumns[i].header;
      result += column;
      if (i === this.selectedColumns.length - 1) { break; }
      result += ";";
    }
    result += "\n";
    /* Add data */
    for (let j = 0; j < rows.length; j++) {
      const row = rows[j];
      for (let i = 0; i < this.selectedColumns.length; i++) {
        const column = this.selectedColumns[i];
        const value = row[column.field] as string;
        result += value ?? "";
        if (i === this.selectedColumns.length - 1) { break; }
        result += ";";
      }
      result += "\n";
    }
    console.log(result);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([result], { type: "text/csv" }));
    a.download = "result.csv";
    a.click();
    a.remove();
  }

  get selectedColumns(): Column[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: Column[]) {
    //restore original order
    this._selectedColumns = this.cols().filter((col) => val.includes(col));
  }
}

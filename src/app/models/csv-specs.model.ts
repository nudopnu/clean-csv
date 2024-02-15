import { CsvDelimiter } from "../lib/csv-delimiter.model";

export interface CsvSpecs {
    numberOfColumns: number;
    delimiter: CsvDelimiter;
}
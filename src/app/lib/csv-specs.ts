import { CsvDelimiter } from "./csv-delimiter";

export interface CsvSpecs {
    numberOfColumns: number;
    delimiter: CsvDelimiter;
}
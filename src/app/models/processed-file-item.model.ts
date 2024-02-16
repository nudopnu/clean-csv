import { CsvSpecs } from "./csv-specs.model";
import { FileItem } from "./file-item.model";

export interface ProcessedFileItem extends FileItem {
    csvSpecs: CsvSpecs;
    content: string;
}
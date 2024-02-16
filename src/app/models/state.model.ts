import { FileItem } from "./file-item.model";
import { ProcessedFileItem } from "./processed-file-item.model";

export interface State {
    fileItems: FileItem[];
    selectedFileItem?: ProcessedFileItem;
}
import { CsvDetector } from "../lib/csv-detector";
import { readFileContent as getFileContent } from "../lib/utils";
import { FileItem } from "./file-item.model";
import { State } from "./state.model";

export interface AbstractStateAction {
    submit(state: State): void | Promise<void>;
    unsubmit(state: State): void | Promise<void>;
}

export class AddFileItemAction implements AbstractStateAction {

    constructor(
        private fileItem: FileItem,
    ) { }

    submit(state: State): void {
        state.fileItems.push(this.fileItem);
    }

    unsubmit(state: State): void {
        state.fileItems = state.fileItems
            .filter(item => item !== this.fileItem);
    }

}

export class RemoveFileItemAction implements AbstractStateAction {

    constructor(
        private fileItem: FileItem,
    ) { }

    submit(state: State): void | Promise<void> {
        state.fileItems = state.fileItems
            .filter(item => item !== this.fileItem);
    }

    unsubmit(state: State): void | Promise<void> {
        state.fileItems.push(this.fileItem);
    }
}

export class ProcessFileAction implements AbstractStateAction {

    constructor(private fileItem: FileItem) { }

    async submit(state: State): Promise<void> {
        const { file, encodings, selectedEncodingIndex } = this.fileItem;
        const encoding = encodings[selectedEncodingIndex];
        const content = await getFileContent(file, encoding);
        const lines = content.split('\n');
        const csvSpecs = new CsvDetector().detect(lines);

        state.selectedFileItem = {
            ...this.fileItem,
            csvSpecs,
            content,
        }
    }

    unsubmit(state: State): void {
        state.selectedFileItem = undefined;
    }
}

export type Action =
    | AddFileItemAction
    | RemoveFileItemAction
    | ProcessFileAction
    ;
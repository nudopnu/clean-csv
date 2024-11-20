import { Counter } from "./counter";
import { CsvDelimiter, CsvDelimiters } from "./csv-delimiter";
import { CsvSpecs } from "./csv-specs";
import { ElementCounter } from "./element-counter";

export class CsvDetector {

    constructor(private limit = 100) { }

    detect(lines: string[]): CsvSpecs {
        const delimiter = this.detectDelimiter(lines);
        const numberOfColumns = this.detectNumberOfColumns(lines, delimiter);
        return {
            delimiter,
            numberOfColumns,
        };
    }

    detectDelimiter(lines: string[]): CsvDelimiter {
        const limit = Math.min(this.limit, lines.length);
        const counter = new ElementCounter(CsvDelimiters);
        for (let i = 0; i < limit; i++) {
            const line = lines[i];
            for (let j = 0; j < line.length; j++) {
                const char = line[j];
                if (counter.isCounting(char as any)) {
                    counter.increment(char as CsvDelimiter);
                }
            }
        }
        return counter.max()!;
    }

    detectNumberOfColumns(lines: string[], delimiter: CsvDelimiter): number {
        const limit = Math.min(this.limit, lines.length);
        const counter = new Counter<number>();
        for (let i = 0; i < limit; i++) {
            const line = lines[i];
            let occurences = 0;
            for (let j = 0; j < line.length; j++) {
                const char = line[j];
                if (char === delimiter) {
                    occurences++;
                }
            }
            counter.increment(occurences);
        }
        return counter.getMax()!;
    }
}
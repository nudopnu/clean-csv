import { CsvSpecs } from "./csv-specs";
import { readFileContent } from "./utils";

export class CsvParser {
    constructor(
        private csvSpecs: CsvSpecs,
    ) { }

    async parseFile(file: File, encoding = "utf8", skipLines = 0) {
        const content = await readFileContent(file, encoding);
        return this.parse(content, skipLines);
    }

    async parse(content: string, skipLines = 0) {
        const lines = content.split('\n');
        const rows: string[][] = [];
        for (let i = 0; i < lines.length; i++) {
            if (skipLines-- > 0) { continue; }
            const line = new ProxyLine(lines[i]);
            const records = line.split(this.csvSpecs.delimiter);
            rows.push(records);
        }
        return rows;
    }

    async detectSkipLinesFromFile(file: File, encoding = "utf8") {
        const content = await readFileContent(file, encoding);
        return this.detectSkipLines(content);
    }

    async detectSkipLines(content: string) {
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = new ProxyLine(lines[i]);
            const records = line.split(this.csvSpecs.delimiter);
            if (records.length === this.csvSpecs.numberOfColumns + 1) {
                return i;
            }
        }
        return -1
    }
}

export class ProxyLine {
    original = "";
    proxy = "";

    constructor(line: string) {
        this.original = line;
        this.proxy = "";
        let inString = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char == "\"") { inString = !inString }
            this.proxy += inString ? "_" : char;
        }
    }

    split(delimiter: string) {
        const splitPoints = this.proxy
            .split('')
            .map((char, idx) => ({ char, idx }))
            .filter(({ char }) => char === delimiter)
            .map(({ idx }) => idx);
        const splitBoundaries = [-1, ...splitPoints, this.proxy.length];
        const splits: string[] = [];
        for (let i = 0; i < splitBoundaries.length - 1; i++) {
            const start = splitBoundaries[i] + 1;
            const end = splitBoundaries[i + 1];
            splits.push(this.original.slice(start, end))
        }
        return splits;
    }
}
export const CsvDelimiters = [
    ",",
    ";",
    ":",
    "\t",
] as const;

export type CsvDelimiter = typeof CsvDelimiters[number];
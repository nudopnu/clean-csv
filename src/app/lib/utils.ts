import chardet, { AnalyseResult } from 'chardet';

export async function getEncodings(file: File): Promise<AnalyseResult> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (_) => {
            fileReader.result
            if (!fileReader.result) return;
            const result = chardet.analyse(new Uint8Array(fileReader.result as ArrayBuffer));
            resolve(result);
        }
        fileReader.readAsArrayBuffer(file as any as File);
    });
}

export async function readFileContent(file: File, encoding: string = "utf8"): Promise<string> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            resolve(fileReader.result as string);
        }
        fileReader.readAsText(file, encoding);
    });
}
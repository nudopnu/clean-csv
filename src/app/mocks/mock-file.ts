export function getMockFile() {
    return new Promise<File>(async (resolve, reject) => {
        const request = await fetch("/ZR-F-01-T01-Faelle_csv.csv");
        const file = new File([await request.arrayBuffer()], "mockfile.csv");
        resolve(file);
    });
}
import * as fs from 'fs';

export class LinesError extends Error {
    constructor(message?: string) {
        super(message);
        Error.captureStackTrace(this, LinesError);
    }
}

/**
 * 
 * @param filePath - path to the file to read
 * @param keyword  - token to find in the file
 * 
 * Using callbacks, logs out each line in the file at `filePath` that contains `keyword`.
 */
function logLinesWithKeywordCallback(filePath: string, keyword: string): number {
    console.log(`Looking for lines with the keyword ${keyword}...`);
    let count = 0
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const lines = data.split(/\r?\n/);
        for (const line of lines) {
            if (line.includes(keyword)) {
                count++;
                console.log(`Matching Line #${count}: ${line}`);
            }
        }
    });
    return count;
}

/**
 * 
 * @param filePath - path to the file to read
 * @param keyword  - token to find in the file
 * 
 * Using promise.then(), logs out each line in the file at `filePath` that contains `keyword`.
 */
function logLinesWithKeywordPromise(filePath: string, keyword: string): number {
    // TODO: fill in
    return 0;
}

/**
 * 
 * @param filePath - path to the file to read
 * @param keyword  - token to find in the file
 * @returns a promise containing the number of lines found.
 * 
 * Using await, logs out each line in the file at `filePath` that contains `keyword`.
 */
async function logLinesWithKeywordAwait(filePath: string, keyword: string) {
    // TODO: fill in
    return;
}

/**
 * 
 * @param filePath - path to the file to read
 * @param keyword  - token to find in the file
 * @returns  Using await, returns out each line in the file at `filePath` that contains `keyword`.
 */
async function getLinesWithKeyword(filePath: string, keyword: string): Promise<Array<String>> {
    // TODO: fill in
    return Promise.resolve([]);
}


/**
 * 
 * @param path - the directory containing the files to read
 * @param keyword  - token to find in each file
 * @returns  returns out each line in the files in `path` that contain `keyword`.
 */
async function getAllKeywordLinesSlow(path: string, keyword: string) : Promise<Array<String>> {
    // TODO: fill in
    return Promise.resolve([]);
}


/**
 * 
 * @param path - the directory containing the files to read
 * @param keyword  - token to find in each file
 * @returns  Using Promise.all(), returns out each line in the files in `path` that contain `keyword`.
 */
async function getAllKeywordLines(path: string, keyword: string) : Promise<Array<String>> {
    // TODO: fill in
    return Promise.resolve([]);
}


export {logLinesWithKeywordCallback, logLinesWithKeywordPromise, logLinesWithKeywordAwait, getLinesWithKeyword, getAllKeywordLines, getAllKeywordLinesSlow}

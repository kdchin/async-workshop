import * as fs from 'fs';

/**
 * 
 * @param filePath - path to the file to read
 * @param keyword  - token to find in the file
 * 
 * Using callbacks, logs out each line in the file at `filePath` that contains `keyword`.
 */
function logLinesWithKeywordCallback(filePath: string, keyword: string): number {
    let count = 0
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const lines = data.split(/\r?\n/);
        for (const line of lines) {
            if (line.includes(keyword)) {
                console.log(line);
                count++;
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
    let count = 0;
    fs.promises.readFile(filePath, 'utf-8').then((data => {
        const lines = data.split(/\r?\n/);
        for (const line of lines) {
            if (line.includes(keyword)) {
                console.log(line);
                count++;
            }
        }
    })).catch((err) => {
        console.error(err);
    });
    return count;
}

/**
 * 
 * @param filePath - path to the file to read
 * @param keyword  - token to find in the file
 * 
 * Using await, logs out each line in the file at `filePath` that contains `keyword`.
 */
async function logLinesWithKeywordAwait(filePath: string, keyword: string) {
    let data;
    let count = 0;
    try {
        data = await fs.promises.readFile(filePath, 'utf-8');
    } catch {
        return 0;
    }
    const lines = data.split(/\r?\n/);
    for (const line of lines) {
        if (line.includes(keyword)) {
            console.log(line);
            count++;
        }
    }
    return count;
}

/**
 * 
 * @param filePath - path to the file to read
 * @param keyword  - token to find in the file
 * @returns  Using await, returns out each line in the file at `filePath` that contains `keyword`.
 */
async function getLinesWithKeyword(filePath: string, keyword: string): Promise<Array<String>> {
    let data;
    try {
        data = await fs.promises.readFile(filePath, 'utf-8');
    } catch {
        return Promise.reject("Error!!");
    }
    const lines = data.split(/\r?\n/);
    const result = [];
    for (const line of lines) {
        if (line.includes(keyword)) {
            result.push(line);
        }
    }
    return Promise.resolve(result);
}


/**
 * 
 * @param path - the directory containing the files to read
 * @param keyword  - token to find in each file
 * @returns  returns out each line in the files in `path` that contain `keyword`.
 */
async function getAllKeywordLinesSlow(path: string, keyword: string) : Promise<Array<String>> {
    let files;
    try {
        files = await fs.promises.readdir(path);
    } catch {
        return Promise.reject("Error!");
    }
    const validLines: Array<String> = [];
    for (const filepath of files) {
        if (filepath.includes("script")) {
            const linesWithKeyword = await getLinesWithKeyword(path + "/" + filepath, keyword);
            validLines.push(...linesWithKeyword);
        }
    }
    return validLines;
}


/**
 * 
 * @param path - the directory containing the files to read
 * @param keyword  - token to find in each file
 * @returns  Using Promise.all(), returns out each line in the files in `path` that contain `keyword`.
 */
async function getAllKeywordLines(path: string, keyword: string) : Promise<Array<String>> {
    let files;
    try {
        files = await fs.promises.readdir(path);
    } catch {
        return Promise.reject("Error!");
    }
    const validFilePromises: Array<Promise<Array<String>>> = [];
    for (const filepath of files) {
        if (filepath.includes("script")) {
            validFilePromises.push(getLinesWithKeyword(path + "/" + filepath, keyword));
        }
    }
    const data = (await Promise.all(validFilePromises)).flat()
    return Promise.resolve(data);
}


export {logLinesWithKeywordCallback, logLinesWithKeywordPromise, logLinesWithKeywordAwait, getLinesWithKeyword, getAllKeywordLines, getAllKeywordLinesSlow}

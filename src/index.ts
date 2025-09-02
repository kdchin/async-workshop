import { logLinesWithKeywordCallback, getAllKeywordLines, getAllKeywordLinesSlow } from "./readfile";

async function main() {
    // sample invocations
    console.log(logLinesWithKeywordCallback('./data/bee-movie-script.txt', 'jazz')); // why doesn't this work?
    const data = await getAllKeywordLines('./data/', 'jazz');
    console.log(data);
}

main();

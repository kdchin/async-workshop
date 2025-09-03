import { logLinesWithKeywordCallback, getAllKeywordLines, getAllKeywordLinesSlow } from "./readfile";

async function main() {
    // sample invocations
    const numLines = logLinesWithKeywordCallback('./data/bee-movie-script.txt', 'jazz')
    console.log(`[logLinesWithKeywordCallback] Found ${numLines} matching lines`); // why doesn't this work?
}

main();

import { expect } from 'chai';
import { getLinesWithKeyword, getAllKeywordLines } from '../src/readfile';

describe('getLinesWithKeyword', () => {
    // TODO: add a test for the successful case!
    it("should reject if the file is invalid", async () => {
        try {
            const result = await getLinesWithKeyword("data/does-not-exist.txt", "jazz");
            expect.fail("If this line was reached, it means that the invocation ran without an error. This is incorrect, because we expect it to error when the file does not exist!!");
        } catch (e) {
            expect(e).to.be.equal('Error!!');
        }
    })
});

describe('getAllKeywordLines', () => {
    // TODO: uncomment .skip when you want to run this test!
    it.skip("should return all the lines that contain 'jazz' from all movie scripts, ignoring non-scripts", async () => {
        const result = await getAllKeywordLines("data", "jazz");
        expect(result).to.be.deep.equal([
            '"You like jazz?" ',
            " light, almost jazzy. Pan flute lead.}",
            " into gentle jazz voice improvisations on the words \"Hakuna"
        ]);
    })
});

const parens = require('../src/services/search/parens');

describe("Parens handler", () => {
    it("handles parens", () => {
        expect(parens(["(", "hello", ")", "and", "(", "(", "pick", "one", ")", "and", "another", ")"]))
            .toEqual([
                [
                    "hello"
                ],
                "and",
                [
                    [
                        "pick",
                        "one"
                    ],
                    "and",
                    "another"
                ]
            ]);
    });
});

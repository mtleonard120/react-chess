import { s } from ".";

const test1 = true && "style";
const test2 = false && "nope";
const test3 = "yep";

const x = 5;
const y = 5;

it("properly concatenates conditional styles", () => {
    expect(s(test2)).toBe(undefined);
    expect(s(test1)).toBe("style");
    expect(s(test1, test2)).toBe("style");
    expect(s(test1, test1)).toBe("style style");
    expect(s(test1, test2, test3)).toBe("style yep");
    expect(s(y === x && "yep")).toBe("yep");
});

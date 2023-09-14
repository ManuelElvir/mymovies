import { isDarkMode} from "./functions";

const window = {
    matchMedia: jest.fn()
}

test("isDarkMode by default false?", function() {
    expect(isDarkMode(window as any)).toStrictEqual(false);
})
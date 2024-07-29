const caesarCipher = require("./caesarCipher");

test("shifts letters in a string by a given factor", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
  expect(caesarCipher("Hello, World!", 26)).toBe("Hello, World!");
});

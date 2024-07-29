## Project Title

JavaScript testing

## Description

This project provides a collection of utility functions in JavaScript, including:

1. **capitalize**: Capitalizes the first character of a string.
2. **reverseString**: Reverses a given string.
3. **calculator**: A basic calculator object with functions for addition, subtraction, multiplication, and division.
4. **caesarCipher**: Encrypts a string using the Caesar cipher method, shifting characters by a specified amount.
5. **analyzeArray**: Analyzes an array of numbers to find the average, minimum, maximum, and length.

Each utility function is accompanied by a comprehensive set of tests to ensure proper functionality and robustness.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [capitalize](#capitalize)
  - [reverseString](#reversestring)
  - [calculator](#calculator)
  - [caesarCipher](#caesarcipher)
  - [analyzeArray](#analyzearray)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use these utility functions in your project, clone the repository and install the dependencies.

```bash
git clone https://github.com/Ozioma45/testing_odin.git
cd testing_odin
npm install
```

## Usage

### capitalize

The `capitalize` function capitalizes the first character of a string.

```javascript
const capitalize = require("./capitalize.js");

console.log(capitalize("hello")); // 'Hello'
console.log(capitalize("world")); // 'World'
```

### reverseString

The `reverseString` function reverses a given string.

```javascript
const reverseString = require("./reverseString.js");

console.log(reverseString("hello")); // 'olleh'
console.log(reverseString("world")); // 'dlrow'
```

### calculator

The `calculator` object provides basic arithmetic operations: addition, subtraction, multiplication, and division.

```javascript
const calculator = require("./calculator.js");

console.log(calculator.add(1, 2)); // 3
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(4, 6)); // 24
console.log(calculator.divide(8, 2)); // 4
```

### caesarCipher

The `caesarCipher` function shifts each character in a string by a specified amount using the Caesar cipher method.

```javascript
const caesarCipher = require("./caesarCipher.js");

console.log(caesarCipher("abc", 3)); // 'def'
console.log(caesarCipher("xyz", 3)); // 'abc'
console.log(caesarCipher("Hello, World!", 3)); // 'Khoor, Zruog!'
```

### analyzeArray

The `analyzeArray` function analyzes an array of numbers and returns an object with the average, minimum, maximum, and length.

```javascript
const analyzeArray = require("./analyzeArray.js");

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
// { average: 4, min: 1, max: 8, length: 6 }

console.log(analyzeArray([2, 4, 6, 8, 10]));
// { average: 6, min: 2, max: 10, length: 5 }
```

## Testing

The project includes a comprehensive set of tests to ensure the correctness of each function. The tests are written using the Jest framework. To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

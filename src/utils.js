export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const reverseString = (str) => {
  let newStr = "";
  for (const char of str) newStr = char + newStr;
  return newStr;
};

export const calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b == 0) throw new Error("Division by 0 is impossible.");
    return Math.floor(a / b);
  },
};

export const caesarCipher = (text, shift) => {
  let cipherText = "";
  for (const char of text) {
    const asciiVal = char.charCodeAt();
    let totalShift = asciiVal;
    if (asciiVal > 64 && asciiVal < 91) {
      totalShift = (asciiVal - 65 + shift) % 26;
      totalShift = 65 + (totalShift < 0 ? totalShift + 26 : totalShift);
    } else if (asciiVal > 96 && asciiVal < 123) {
      totalShift = (asciiVal - 97 + shift) % 26;
      totalShift = 97 + (totalShift < 0 ? totalShift + 26 : totalShift);
    }

    cipherText += String.fromCharCode(totalShift);
  }

  return cipherText;
};

export const analyzeArray = (array) => {
  console.log({
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    average: array.reduce((p, c) => (p += c)) / array.length,
  });
  return {
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    average: array.reduce((p, c) => (p += c)) / array.length,
  };
};

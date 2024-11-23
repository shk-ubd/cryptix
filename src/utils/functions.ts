import { error } from "console"

export function caesarCipherEncrypt(plainText: string, key: number) {
  let cipherText = ""
  for (let i = 0; i < plainText.length; i++) {
    let charCode = plainText.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      charCode = (charCode - 65 + key) % 26 + 65
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = (charCode - 97 + key) % 26 + 97
    }
    cipherText += String.fromCharCode(charCode)
  }
  return cipherText
}

export function caesarCipherDecrypt(cipherText: string, key: number) {
  let plainText = ""
  for (let i = 0; i < cipherText.length; i++) {
    let charCode = cipherText.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      charCode = (charCode - 65 - key + 26) % 26 + 65
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = (charCode - 97 - key + 26) % 26 + 97
    }
    plainText += String.fromCharCode(charCode);
  }
  return plainText
}

export function vigenereCipherEncrypt(plainText: string, key: string) {
  let cipherText = ""
  for (let i = 0; i < plainText.length; i++) {
    let code = plainText.charCodeAt(i)

    cipherText = cipherText + (plainText.charCodeAt(i))
  }
}

export const encryptVigenere = (plaintext: string, key: string): string => {
  let result = '';
  if (key.length === 0) {
    alert('Key must not be empty');
    return '';
  }
  for (let i = 0, j = 0; i < plaintext.length; i++) {
    const c = plaintext.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      result += String.fromCharCode((c - 65 + key.charCodeAt(j % key.length) - 65) % 26 + 65);
      j++;
    } else if (c >= 97 && c <= 122) {
      result += String.fromCharCode((c - 97 + key.charCodeAt(j % key.length) - 97) % 26 + 97);
      j++;
    } else {
      result += plaintext.charAt(i);
    }
  }
  return result;
};

export const decryptVigenere = (ciphertext: string, key: string): string => {
  let result = '';
  if (key.length === 0) {
    alert('Key must not be empty');
    return '';
  }
  for (let i = 0, j = 0; i < ciphertext.length; i++) {
    const c = ciphertext.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      result += String.fromCharCode((c - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 65);
      j++;
    } else if (c >= 97 && c <= 122) {
      result += String.fromCharCode((c - 97 - (key.charCodeAt(j % key.length) - 97) + 26) % 26 + 97);
      j++;
    } else {
      result += ciphertext.charAt(i);
    }
  }
  return result;
};


const generateMatrix = (key: string): string[][] => {
  key = key.replace(/j/g, 'i').toUpperCase(); // Replace 'J' with 'I'
  let alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
  let matrix: string[][] = [];
  let used = new Set<string>();

  // Build matrix from key
  for (let char of key) {
    if (!used.has(char) && alphabet.includes(char)) {
      used.add(char);
    }
  }

  // Add remaining letters to matrix
  for (let char of alphabet) {
    if (!used.has(char)) {
      used.add(char);
    }
  }

  // Create 5x5 matrix
  let temp = Array.from(used) as string[];
  for (let i = 0; i < 5; i++) {
    matrix.push(temp.slice(i * 5, i * 5 + 5));
  }

  return matrix;
};


const formatText = (text: string): string[] => {
  text = text.replace(/j/g, 'i').toUpperCase().replace(/[^A-Z]/g, '');
  let formattedText = '';

  for (let i = 0; i < text.length; i += 2) {
    let pair = text[i];

    if (i + 1 < text.length && text[i] === text[i + 1]) {
      pair += 'X';
      i--; // Recheck the next character
    } else if (i + 1 < text.length) {
      pair += text[i + 1];
    } else {
      pair += 'X'; // Odd-length text case
    }

    formattedText += pair;
  }

  return formattedText.match(/.{1,2}/g) || [];
};

const findPosition = (char: string, matrix: string[][]): [number, number] => {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (matrix[row][col] === char) {
        return [row, col];
      }
    }
  }
  return [-1, -1];
};

export const encryptPlayfair = (text: string, key: string): string => {
  let matrix = generateMatrix(key);
  let pairs = formatText(text);
  let result = '';

  for (let pair of pairs) {
    let [r1, c1] = findPosition(pair[0], matrix);
    let [r2, c2] = findPosition(pair[1], matrix);

    if (r1 === r2) {
      // Same row, shift right
      result += matrix[r1][(c1 + 1) % 5];
      result += matrix[r2][(c2 + 1) % 5];
    } else if (c1 === c2) {
      // Same column, shift down
      result += matrix[(r1 + 1) % 5][c1];
      result += matrix[(r2 + 1) % 5][c2];
    } else {
      // Rectangle case
      result += matrix[r1][c2];
      result += matrix[r2][c1];
    }
  }

  return result;
};

export const decryptPlayfair = (text: string, key: string): string => {
  let matrix = generateMatrix(key);
  let pairs = formatText(text);
  let result = '';

  for (let pair of pairs) {
    let [r1, c1] = findPosition(pair[0], matrix);
    let [r2, c2] = findPosition(pair[1], matrix);

    if (r1 === r2) {
      // Same row, shift left
      result += matrix[r1][(c1 + 4) % 5];
      result += matrix[r2][(c2 + 4) % 5];
    } else if (c1 === c2) {
      // Same column, shift up
      result += matrix[(r1 + 4) % 5][c1];
      result += matrix[(r2 + 4) % 5][c2];
    } else {
      // Rectangle case
      result += matrix[r1][c2];
      result += matrix[r2][c1];
    }
  }

  return result;
};


export const encryptRailFence = (text: string, depth: number): string => {

  if (depth <= 0 || depth > text.length) {
    alert('Invalid Depth! Depth must be between 1 and text length');
    return '';
  }
  if (depth === 1) {
    return text;
  }

  const rails: string[] = Array.from({ length: depth }, () => '');

  let directionDown = false;
  let rail = 0;

  for (const char of text) {
    rails[rail] += char;

    if (rail === 0) {
      directionDown = true;
    } else if (rail === depth - 1) {
      directionDown = false;
    }

    // Move to the next rail
    rail += directionDown ? 1 : -1;
  }

  // Combine all rails to form the ciphertext
  return rails.join('');
}

export const decryptRailFence = (ciphertext: string, depth: number): string => {

  if (depth <= 0 || depth > ciphertext.length) {
    return '';
  }
  if (depth === 1) {
    return ciphertext;
  }

  const railLengths = Array.from({ length: depth }, () => 0);
  let directionDown = false;
  let rail = 0;

  for (const char of ciphertext) {
    railLengths[rail]++;

    if (rail === 0) {
      directionDown = true;
    } else if (rail === depth - 1) {
      directionDown = false;
    }

    rail += directionDown ? 1 : -1;
  }

  const rails: string[] = Array.from({ length: depth }, () => '');
  let index = 0;

  for (let i = 0; i < depth; i++) {
    rails[i] = ciphertext.substr(index, railLengths[i]);
    index += railLengths[i];
  }

  let decryptedText = '';
  rail = 0;
  directionDown = false;
  const railPointers = Array(depth).fill(0);

  for (let i = 0; i < ciphertext.length; i++) {
    decryptedText += rails[rail][railPointers[rail]];
    railPointers[rail]++;

    if (rail === 0) {
      directionDown = true;
    } else if (rail === depth - 1) {
      directionDown = false;
    }

    rail += directionDown ? 1 : -1;
  }

  return decryptedText;
}
// Hill Cipher Key Matrix
const keyMatrix: number[][] = [
  [1, 24, 5],
  [3, 21, 15],
  [2, 7, 11]
];

// Function to find modular inverse of a number
function modInverse(a: number, mod: number): number | null {
  a = a % mod;
  for (let x = 1; x < mod; x++) {
      if ((a * x) % mod === 1) {
          return x;
      }
  }
  return null; // No modular inverse exists
}

// Function to compute the determinant of a matrix
function determinant(matrix: number[][]): number {
  const n = matrix.length;
  if (n === 2) {
      return (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]) % 26;
  }

  let res = 0;
  let sign = 1;

  for (let index = 0; index < n; index++) {
      const curMat: number[][] = [];
      for (let row = 1; row < n; row++) {
          const tempArr: number[] = [];
          for (let col = 0; col < n; col++) {
              if (col !== index) {
                  tempArr.push(matrix[row][col]);
              }
          }
          curMat.push(tempArr);
      }
      res = (res + sign * matrix[0][index] * determinant(curMat)) % 26;
      sign = -sign; // Alternate sign
  }

  return (res + 26) % 26; // Ensuring non-negative result
}

// Function to calculate the inverse of a matrix
function inverse(matrix: number[][]): number[][] | null {
  const detA = determinant(matrix);
  if (detA === 0) {
      return null; // Singular matrix, no inverse
  }

  const detInv = modInverse(detA, 26);
  const n = matrix.length;
  const res: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let outerIndex = 0; outerIndex < n; outerIndex++) {
      for (let index = 0; index < n; index++) {
          const sign = (outerIndex + index) % 2 === 0 ? 1 : -1;
          const curMat: number[][] = [];
          for (let row = 0; row < n; row++) {
              if (row !== outerIndex) {
                  const tempArr: number[] = [];
                  for (let col = 0; col < n; col++) {
                      if (col !== index) {
                          tempArr.push(matrix[row][col]);
                      }
                  }
                  curMat.push(tempArr);
              }
          }
          res[index][outerIndex] = (sign * determinant(curMat) * detInv!) % 26;
          res[index][outerIndex] = (res[index][outerIndex] + 26) % 26; // Ensure non-negative values
      }
  }

  return res;
}

// Function for encryption
export function hillCipherEncrypt(Text: string): string {
  let res = "";
  const paddedText = Text + 'x'.repeat((3 - (Text.length % 3)) % 3);
  const TextMatrix: number[][] = [];
  let tempArr: number[] = [];
  const caseMap: Record<number, number> = {};

  for (let index = 0; index < paddedText.length; index++) {
      const pos = paddedText.charCodeAt(index);
      if (pos >= 65 && pos <= 90) {
          tempArr.push(pos - 65); // Uppercase
          caseMap[index] = 1;
      } else {
          tempArr.push(pos - 97); // Lowercase
      }

      if (tempArr.length === keyMatrix[0].length) {
          TextMatrix.push(tempArr);
          tempArr = [];
      }
  }

  for (const el of TextMatrix) {
      const data = Array(keyMatrix.length).fill(0);
      for (let i = 0; i < keyMatrix.length; i++) {
          for (let j = 0; j < keyMatrix[0].length; j++) {
              data[i] = (data[i] + keyMatrix[i][j] * el[j]) % 26;
          }
      }

      for (let index = 0; index < data.length; index++) {
          if (caseMap[TextMatrix.indexOf(el) * keyMatrix[0].length + index]) {
              res += String.fromCharCode(data[index] + 65); // Uppercase
          } else {
              res += String.fromCharCode(data[index] + 97); // Lowercase
          }
      }
  }

  return res;
}

// Function for decryption
export function hillCipherDecrypt(Text: string): string {
  let res = "";
  if (Text.length % keyMatrix[0].length !== 0) {
      throw new Error(`Text size should be a multiple of ${keyMatrix[0].length}`);
  }

  const caseMap: Record<number, number> = {};
  const TextMatrix: number[][] = [];
  let tempArr: number[] = [];

  for (let index = 0; index < Text.length; index++) {
      const pos = Text.charCodeAt(index);
      if (pos >= 65 && pos <= 90) {
          tempArr.push(pos - 65); // Uppercase
          caseMap[index] = 1;
      } else {
          tempArr.push(pos - 97); // Lowercase
      }

      if (tempArr.length === keyMatrix[0].length) {
          TextMatrix.push(tempArr);
          tempArr = [];
      }
  }

  const invKeyMatrix = inverse(keyMatrix);
  if (!invKeyMatrix) return ''; // No inverse exists

  for (const el of TextMatrix) {
      const data = Array(keyMatrix[0].length).fill(0);
      for (let i = 0; i < invKeyMatrix.length; i++) {
          for (let j = 0; j < invKeyMatrix[0].length; j++) {
              data[i] = (data[i] + invKeyMatrix[i][j] * el[j]) % 26;
          }
      }

      for (let index = 0; index < data.length; index++) {
          if (caseMap[TextMatrix.indexOf(el) * keyMatrix[0].length + index]) {
              res += String.fromCharCode(data[index] + 65); // Uppercase
          } else {
              res += String.fromCharCode(data[index] + 97); // Lowercase
          }
      }
  }

  return res.replace(/x/g, ''); // Remove padding characters
}


// Example usage
const originalText = "HELLO";
const encryptedText = hillCipherEncrypt(originalText);
const decryptedText = hillCipherDecrypt(encryptedText);

console.log("Original:", originalText);
console.log("Encrypted:", encryptedText);
console.log("Decrypted:", decryptedText);




export function encryptRowColumnCipher(plaintext: string, keyword: string): string {
  const lenKey = keyword.length;
  const lenMsg = plaintext.length;
  const noRows = Math.ceil(lenMsg / lenKey);
  
  // Determine the column order based on the keyword
  const colVal = Array.from(Array(lenKey).keys()).sort((a, b) => keyword[a].localeCompare(keyword[b]));

  // Create matrix with underscores as placeholders
  const encMat: string[][] = Array.from({ length: noRows }, () => Array(lenKey).fill('_'));

  // Fill the matrix row by row with the plaintext
  let x = 0;
  for (let i = 0; i < noRows; i++) {
    for (let j = 0; j < lenKey; j++) {
      if (x < lenMsg) encMat[i][j] = plaintext[x++];
    }
  }

  // Read columns according to sorted column indices
  let cipher = "";
  for (const col of colVal) {
    for (let i = 0; i < noRows; i++) {
      cipher += encMat[i][col];
    }
  }

  return cipher;
}

export function decryptRowColumnCipher(ciphertext: string, keyword: string): string {
  const lenKey = keyword.length;
  const lenMsg = ciphertext.length;
  const noRows = lenMsg / lenKey;

  // Determine the column order based on the keyword
  const colVal = Array.from(Array(lenKey).keys()).sort((a, b) => keyword[a].localeCompare(keyword[b]));

  // Create matrix to place decrypted characters
  const decMat: string[][] = Array.from({ length: noRows }, () => Array(lenKey).fill('_'));

  // Fill columns of the matrix according to the sorted column indices
  let x = 0;
  for (const col of colVal) {
    for (let i = 0; i < noRows; i++) {
      decMat[i][col] = ciphertext[x++];
    }
  }

  // Read the matrix row by row to get the decrypted Text
  let Text = "";
  for (let i = 0; i < noRows; i++) {
    for (let j = 0; j < lenKey; j++) {
      Text += decMat[i][j];
    }
  }

  return Text.replace(/_/g, ' '); // Remove any underscore padding
}



// Convert a string to its binary representation
export function stringToBinary(input: string): string {
  let binaryString = '';
  for (let i = 0; i < input.length; i++) {
    let binaryChar = input.charCodeAt(i).toString(2).padStart(8, '0'); // Ensure it's 8 bits long
    binaryString += binaryChar;
  }
  return binaryString;
}

// Convert a binary string back to its character string representation
export function binaryToString(binary: string): string {
  let str = '';
  if (binary.length % 8 !== 0) {
    throw new Error("Binary string length must be a multiple of 8.");
  }
  for (let i = 0; i < binary.length; i += 8) {
    let byte = binary.slice(i, i + 8);
    str += String.fromCharCode(parseInt(byte, 2));
  }
  return str;
}

// Generate a random binary key of a given length
export function generateRandomBinaryKey(length: number): string {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += Math.random() < 0.5 ? '0' : '1'; // Randomly generate 0 or 1
  }
  return key;
}

export const encryptOTP = (binaryText: string, binaryKey: string): string => {
  return binaryText
    .split('')
    .map((bit, index) => (bit === binaryKey[index] ? '0' : '1'))
    .join('')
}

export const decryptOTP = (binaryCiphertext: string, binaryKey: string): string => {
  return binaryCiphertext
    .split('')
    .map((bit, index) => (bit === binaryKey[index] ? '0' : '1'))
    .join('')
}

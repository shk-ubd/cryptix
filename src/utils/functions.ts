export function caesarCipherEncrypt(plainText: string) {
    let cipherText = ""
    for (let i = 0; i < plainText.length; i++) {
        let charCode = plainText.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) {
            charCode = (charCode - 65 + 3) % 26 + 65
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 + 3) % 26 + 97
        }
        cipherText += String.fromCharCode(charCode)
    }
    return cipherText
}

export function caesarCipherDecrypt(cipherText: string) {
    let plainText = ""
    for (let i = 0; i < cipherText.length; i++) {
        let charCode = cipherText.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) {
            charCode = (charCode - 65 - 3 + 26) % 26 + 65
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 - 3 + 26) % 26 + 97
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
  
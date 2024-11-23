interface cipherMethodDescription {
    title: string,
    overview: string,
    howItWorks: string[],
    history?: string,
    link: string
}

export const caesarCipherMethodTheory: cipherMethodDescription = {
    title: 'Caesar Cipher',
    overview: 'The Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on.',
    howItWorks: ["Choose a shift value. This is the number of positions each letter in the plaintext will be shifted.", "Encrypt the plaintext. For each letter in the plaintext, shift it by the shift value to get the corresponding letter in the ciphertext.", "Decrypt the ciphertext. For each letter in the ciphertext, shift it back by the shift value to get the corresponding letter in the plaintext."],
    link: '/caesar',
    history: 'The Caesar cipher is named after Julius Caesar, who is said to have used it to communicate with his generals. It is one of the earliest known encryption techniques and is still used today as a basic form of encryption.'
}


export const vigenereCipherMethodTheory: cipherMethodDescription = {
    title: 'Vigenère Cipher',
    overview: 'The Vigenère cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. It uses a keyword, where each letter in the keyword determines how much each letter in the plaintext is shifted. This makes the cipher more resistant to frequency analysis than simpler substitution ciphers like the Caesar cipher.',
    howItWorks: [
        "Start by choosing a keyword. The keyword will control how each letter in your message is shifted.",
        "Repeat or trim the keyword to match the length of your message.",
        "For each letter in the message, find its corresponding letter in the keyword.",
        "Shift the message letter forward in the alphabet by a number of positions equal to the position of the keyword letter in the alphabet. For example, if the keyword letter is 'B', shift the message letter by 1 (since 'B' is the second letter).",
        "If you reach the end of the alphabet, wrap around to the beginning. For instance, if you shift 'Z' forward by 1, it becomes 'A'.",
        "Once all letters in the message are shifted, the encrypted text is formed.",
        "To decrypt the message, use the same keyword and reverse the shifts. For each letter in the encrypted text, shift it backward by the amount indicated by the corresponding letter in the keyword.",
        "After reversing all the shifts, the original message is revealed."
    ],
    link: '/vigenere',
    history: 'The Vigenère cipher was first described in 1553 by Giovan Battista Bellaso but was later misattributed to Blaise de Vigenère in the 19th century. It was considered unbreakable for many centuries until Charles Babbage and Friedrich Kasiski independently broke it in the 19th century. Today, the Vigenère cipher is mainly of historical interest but remains an important example of polyalphabetic ciphers.'
}

export const playfairCipherMethodTheory: cipherMethodDescription = {
    title: 'Playfair Cipher',
    overview: 'The Playfair cipher is a digraph substitution cipher that encrypts pairs of letters rather than individual letters, making it more secure than simpler ciphers like the Caesar cipher. It uses a 5x5 grid of letters based on a keyword to encrypt the message.',
    howItWorks: [
        "Start by choosing a keyword. The keyword is used to create a 5x5 grid of letters, where each letter of the keyword appears only once, and the remaining letters of the alphabet (excluding 'J') fill the rest of the grid.",
        "Divide the plaintext message into pairs of letters (digraphs). If a pair consists of the same letter, insert an 'X' between them to separate them, or add an 'X' if there's a single letter left.",
        "Locate both letters of the pair in the 5x5 grid.",
        "If the two letters are in the same row, shift them right by one position. If they're in the same column, shift them down by one position.",
        "If the letters form a rectangle, swap them with the letters in the opposite corners of the rectangle.",
        "Repeat the process for each pair to get the encrypted text.",
        "To decrypt, reverse the process: shift left for letters in the same row, shift up for letters in the same column, and reverse the rectangle swap for pairs."
    ],
    link: '/playfair',
    history: 'The Playfair cipher was invented by Charles Wheatstone in 1854, but it was promoted by Lord Playfair, after whom it is named. It was used by the British in World War I and II, but it is now mainly of historical interest due to advances in cryptography.'
}


export const otpCipherMethodTheory: cipherMethodDescription = {
    title: 'One-Time Pad (OTP)',
    overview: 'The One-Time Pad is an encryption technique that is theoretically unbreakable if used correctly. It uses a random key, the same length as the message, to encrypt each letter. Since the key is random and used only once, the ciphertext is secure.',
    howItWorks: [
        "Start by generating a random key that is the same length as the message you want to encrypt. The key must be truly random and used only once for security.",
        "For each letter in the plaintext, convert it to its numerical equivalent (A = 0, B = 1, ..., Z = 25). Do the same for each letter in the key.",
        "Add the numerical value of the plaintext letter and the corresponding key letter. If the result is greater than 25, subtract 26 (to stay within the alphabet).",
        "Convert the resulting number back to a letter to form the encrypted text.",
        "To decrypt the ciphertext, convert each letter to its numerical value, subtract the key's corresponding value (if negative, add 26), and convert the result back to a letter.",
        "Since the key is random and used only once, the encryption is theoretically unbreakable if the key is kept secret and not reused."
    ],
    link: '/otp',
    history: 'The One-Time Pad was first described in 1882 by Frank Miller and later developed by Gilbert Vernam. It is the only encryption method that has been mathematically proven to be unbreakable when used correctly, but it is rarely used in practice due to difficulties in generating and sharing random keys securely.'
}

export const railFenceCipherMethodTheory: cipherMethodDescription = {
    title: 'Rail Fence Cipher',
    overview: 'The Rail Fence Cipher is a classical transposition cipher that encrypts a message by arranging it in a zigzag pattern across multiple "rails". This method is simple to implement and provides a basic level of security, making it an interesting example of early cryptography.',
    howItWorks: [
        "Choose the number of rails (depth) for the zigzag pattern. This will determine how the message is arranged.",
        "Write the message in a zigzag pattern down and up across the rails. Start from the top rail, move downwards to the last rail, and then back up to the first rail, repeating this process until the entire message is written.",
        "Once the message is arranged, read off each rail from left to right to create the ciphertext.",
        "To decrypt, reverse the process: determine how many characters are in each rail based on the length of the ciphertext and the chosen depth.",
        "Fill in the rails with the characters from the ciphertext, then read the characters in the zigzag pattern to reconstruct the original message."
    ],
    link: '/rail-fence',
    history: 'The Rail Fence Cipher dates back to at least the 19th century and is often attributed to various historical contexts, including its use in World War I for secure communication. While not secure by modern standards, it serves as an educational tool for understanding basic concepts of encryption.'
}

export const hillCipherMethodTheory: cipherMethodDescription = {
    title: 'Hill Cipher',
    overview: 'The Hill cipher is a polygraphic substitution cipher based on linear algebra. It encrypts blocks of text using matrix multiplication, making it more secure than simple substitution ciphers. The key is a square matrix, and the plaintext is divided into blocks to be encrypted together.',
    howItWorks: [
        "Choose a key, which is a square matrix. The size of the matrix determines the block size (e.g., a 3x3 matrix encrypts 3 letters at a time).",
        "Convert the plaintext into numerical form, where A=0, B=1, ..., Z=25. The plaintext must be padded to match the size of the key matrix if necessary.",
        "Group the plaintext into blocks that correspond to the size of the key matrix. For any incomplete blocks, pad with a filler character (commonly 'x').",
        "Multiply the key matrix by the plaintext block matrix. If the resulting values exceed 25, take the modulus 26 to ensure they map back to letters.",
        "Convert the resulting numbers back to letters to get the ciphertext.",
        "To decrypt, find the inverse of the key matrix modulo 26. Multiply the inverse matrix by the ciphertext block matrix and take the modulus 26 again to retrieve the original plaintext."
    ],
    link: '/hill',
    history: 'The Hill cipher was invented by Lester S. Hill in 1929 and is notable for being one of the first polygraphic ciphers to be invented. It utilizes linear algebra and matrix operations, making it more complex and secure compared to earlier ciphers, although it can still be susceptible to certain attacks if the key is not chosen carefully.'
}


export const rowColumnCipherMethodTheory: cipherMethodDescription = {
    title: 'Row-Column Transposition Cipher',
    overview: 'The Row-Column Transposition Cipher is a classical technique that rearranges characters in the plaintext into a grid and reads them in a specified column order based on a keyword. This cipher is a type of transposition cipher, meaning it relies on reordering rather than substitution to obscure the original message.',
    howItWorks: [
        "Choose a keyword, which determines the column order. Each letter of the keyword corresponds to a column in the grid, and sorting the letters alphabetically provides the reading sequence.",
        "Arrange the plaintext into rows within a matrix where the number of columns equals the length of the keyword. Add padding (e.g., underscores) if the plaintext does not perfectly fill the matrix.",
        "To encrypt, read down the columns in the order determined by sorting the keyword alphabetically. Concatenate these values to produce the ciphertext.",
        "For decryption, reverse the process by filling the matrix columns in the sorted keyword order, then read the matrix row by row to reconstruct the original plaintext."
    ],
    link: '/row-column',
    history: 'The Row-Column Transposition Cipher dates back to early classical cryptography, where such techniques were common before more complex encryption methods were developed. It relies on positional shuffling and was widely used due to its simplicity and effectiveness in creating non-obvious patterns. However, it is vulnerable to frequency analysis if used alone, as the letters remain the same, only their positions are altered.'
};
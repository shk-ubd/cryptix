export const featuredCards = [
    {
        title: 'Caesar Cipher',
        description: 'Explore the Caesar Cipher, a foundational encryption technique that shifts characters for secure communication.',
        link: '/caesar',
    },
    {
        title: 'Vigenère Cipher',
        description: 'Delve into the Vigenère Cipher, a classical polyalphabetic encryption method for enhanced data security.',
        link: '/vigenere',
    },
    {
        title: 'Playfair Cipher',
        description: 'Discover the Playfair Cipher, a digraph substitution cipher used for encoding pairs of letters.',
        link: '/playfair',
    },
    {
        title: 'One-Time Pad',
        description: 'Learn about the One-Time Pad, a theoretically unbreakable cipher for encrypting messages with perfect secrecy.',
        link: '/otp',
    },
];


export const navLinks = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Caesar',
        link: '/caesar',
    },
    {
        title: 'Vigenère',
        link: '/vigenere',
    },
    {
        title: 'One-Time Pad',
        link: '/otp',
    },
    {
        title: 'Playfair',
        link: '/playfair',
    },
];


interface cipherMethodDescription {
    title: string,
    overview: string,
    howItWorks: string[],
    history?: string,
}
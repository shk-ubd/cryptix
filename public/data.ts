export const featuredCards = [
    {
        title: 'Caesar Cipher',
        description: 'A simple Caesar Cipher implementation',
        link: '/caesar',
    },
    {
        title: 'Vigenère Cipher',
        description: 'A simple Vigenère Cipher implementation',
        link: '/vigenere',
    },
    {
        title: 'Playfair Cipher',
        description: 'A simple Playfair Cipher implementation',
        link: '/playfair',
    },
    {
        title: 'One-Time Pad',
        description: 'A simple One-Time Pad Cipher implementation',
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
        title: 'Playfair',
        link: '/playfair',
    },
    {
        title: 'One-Time Pad',
        link: '/otp',
    },
];


interface cipherMethodDescription {
    title: string,
    overview: string,
    howItWorks: string[],
    history?: string,
}
// Sample dictionary data
export const sampleWords = [
    { id: 1, word: 'Hello', language: 'English' },
    { id: 2, word: 'Bonjour', language: 'French' },
    { id: 3, word: 'Hola', language: 'Spanish' },
    { id: 4, word: 'Ciao', language: 'Italian' },
    { id: 5, word: 'Привет', language: 'Russian' },
    { id: 6, word: 'こんにちは', language: 'Japanese' },
    { id: 7, word: '안녕하세요', language: 'Korean' },
    { id: 8, word: 'Hallo', language: 'German' },
    { id: 9, word: 'Olá', language: 'Portuguese' },
    { id: 10, word: 'Merhaba', language: 'Turkish' },
];

// Sample translations data
export const sampleTranslations: Record<number, Array<{
    id: number;
    translation: string;
    contributor: string;
    votes: number;
    date: string;
}>> = {
    1: [
        { id: 1, translation: 'Сәлем', contributor: 'Aizhan', votes: 5, date: '2023-10-15' },
        { id: 2, translation: 'Сәлеметсіз бе', contributor: 'Nurlan', votes: 3, date: '2023-09-20' }
    ],
    2: [
        { id: 3, translation: 'Сәлем', contributor: 'Marat', votes: 4, date: '2023-11-05' }
    ],
    3: [
        { id: 4, translation: 'Сәлем', contributor: 'Dinara', votes: 2, date: '2023-08-30' }
    ],
    4: [
        { id: 5, translation: 'Сәлем', contributor: 'Askar', votes: 1, date: '2023-12-10' }
    ],
    5: [
        { id: 6, translation: 'Сәлем', contributor: 'Gulnara', votes: 7, date: '2023-07-22' }
    ]
}; 
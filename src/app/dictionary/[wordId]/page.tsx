"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sampleWords, sampleTranslations } from '../data';

export default function WordDetailsPage({ params }: { params: { wordId: string } }) {
    const wordId = parseInt(params.wordId);
    const router = useRouter();
    const [newTranslation, setNewTranslation] = useState('');
    const [translations, setTranslations] = useState(sampleTranslations[wordId] || []);

    const wordData = sampleWords.find(word => word.id === wordId);

    if (!wordData) {
        return (
            <div className="py-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h1 className="text-xl font-bold mb-4 text-red-600">Word not found</h1>
                    <p className="mb-4">The word you're looking for doesn't exist in our dictionary.</p>
                    <button
                        onClick={() => router.push('/dictionary')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Back to Dictionary
                    </button>
                </div>
            </div>
        );
    }

    const handleSubmitTranslation = (e: React.FormEvent) => {
        e.preventDefault();

        if (newTranslation.trim() === '') {
            return;
        }

        const newTranslationObj = {
            id: Date.now(),
            translation: newTranslation,
            contributor: "Anonymous",
            votes: 0,
            date: new Date().toISOString().split('T')[0]
        };

        setTranslations([...translations, newTranslationObj]);
        setNewTranslation('');
    };

    const handleVote = (translationId: number) => {
        setTranslations(
            translations.map(t =>
                t.id === translationId ? { ...t, votes: t.votes + 1 } : t
            )
        );
    };

    return (
        <div className="py-6">
            <div className="mb-4 flex items-center">
                <button
                    onClick={() => router.push('/dictionary')}
                    className="mr-4 text-blue-600 hover:text-blue-800"
                >
                    ← Back to Dictionary
                </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-3xl font-bold">{wordData.word}</h2>
                        <p className="text-gray-600">{wordData.language}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Kazakh Translations</h3>

                    {translations.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {translations
                                .sort((a, b) => b.votes - a.votes)
                                .map(translation => (
                                    <li key={translation.id} className="py-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-lg font-medium">{translation.translation}</p>
                                                <p className="text-sm text-gray-500">
                                                    Contributed by {translation.contributor} on {translation.date}
                                                </p>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="mr-2 text-gray-700">{translation.votes}</span>
                                                <button
                                                    onClick={() => handleVote(translation.id)}
                                                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
                                                >
                                                    Upvote
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
                        <p className="text-gray-500 italic">No translations available yet. Be the first to contribute!</p>
                    )}

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Contribute a Translation</h3>
                        <form onSubmit={handleSubmitTranslation} className="space-y-4">
                            <div>
                                <label htmlFor="translation" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Kazakh Translation
                                </label>
                                <input
                                    type="text"
                                    id="translation"
                                    value={newTranslation}
                                    onChange={(e) => setNewTranslation(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter translation in Kazakh"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Submit Translation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
} 
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sampleWords } from './data';

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const filteredWords = sampleWords.filter(
    (wordObj) =>
      wordObj.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wordObj.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWordClick = (wordId: number) => {
    router.push(`/dictionary/${wordId}`);
  };

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">Multilingual Dictionary</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search words or languages
          </label>
          <input
            type="text"
            id="search"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {filteredWords.length > 0 ? (
            filteredWords.map((wordObj) => (
              <li
                key={wordObj.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleWordClick(wordObj.id)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{wordObj.word}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {wordObj.language}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-gray-500">
              No words found matching your search.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
} 
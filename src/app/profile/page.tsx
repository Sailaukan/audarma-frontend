"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  // Fake user data
  const [userData] = useState({
    name: "Aisha Nurmagambetova",
    username: "aisha_n",
    email: "aisha.n@example.com",
    joinDate: "January 15, 2023",
    bio: "Language enthusiast passionate about preserving and promoting Kazakh language. I'm a translator and language teacher based in Almaty.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Almaty, Kazakhstan",
    languages: ["Kazakh (Native)", "Russian (Fluent)", "English (Advanced)"],
    stats: {
      contributions: 87,
      upvotes: 342
    }
  });

  // Fake contributed translations
  const [contributions] = useState([
    { id: 1, word: "Hello", translation: "Сәлем", language: "Kazakh", date: "2023-12-15", upvotes: 24 },
    { id: 2, word: "Thank you", translation: "Рахмет", language: "Kazakh", date: "2023-12-18", upvotes: 31 },
    { id: 3, word: "Friend", translation: "Дос", language: "Kazakh", date: "2024-01-05", upvotes: 18 },
    { id: 4, word: "Family", translation: "Отбасы", language: "Kazakh", date: "2024-01-22", upvotes: 27 },
    { id: 5, word: "Love", translation: "Махаббат", language: "Kazakh", date: "2024-02-14", upvotes: 42 },
  ]);

  // Tabs for profile sections
  const [activeTab, setActiveTab] = useState('contributions');

  return (
    <div className="py-6 max-w-6xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={userData.avatar}
              alt={userData.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-600 mb-2">@{userData.username}</p>
            <p className="text-gray-700 mb-4">{userData.bio}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {userData.location}
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Joined {userData.joinDate}
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {userData.email}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:self-start">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Edit Profile
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-3xl font-bold text-blue-600">{userData.stats.contributions}</p>
          <p className="text-gray-600">Contributions</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-3xl font-bold text-green-600">{userData.stats.upvotes}</p>
          <p className="text-gray-600">Upvotes</p>
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {userData.languages.map((language, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('contributions')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'contributions'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Contributions
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'saved'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Saved Words
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'activity'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Activity
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'contributions' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Contributions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Word
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Translation
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Language
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Upvotes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contributions.map((contribution) => (
                      <tr key={contribution.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link href={`/dictionary/${contribution.id}`} className="text-blue-600 hover:underline">
                            {contribution.word}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {contribution.translation}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {contribution.language}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {contribution.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-gray-900 mr-2">{contribution.upvotes}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800">
                  View All Contributions
                </button>
              </div>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No saved words yet</h3>
              <p className="text-gray-500 mb-4">When you save words from the dictionary, they'll appear here.</p>
              <Link href="/dictionary" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Browse Dictionary
              </Link>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Activity feed coming soon</h3>
              <p className="text-gray-500">We're working on this feature. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path
            ? 'bg-indigo-100 text-indigo-700 border-b-2 border-indigo-500'
            : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-200';
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center h-16">
                    <div className="flex items-center">
                        <div className="flex space-x-8">
                            <Link
                                href="/dictionary"
                                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive('/dictionary')}`}
                            >
                                Dictionary
                            </Link>
                            <Link
                                href="/profile"
                                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive('/profile')}`}
                            >
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 
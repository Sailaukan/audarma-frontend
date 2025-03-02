import { auth } from '@clerk/nextjs/server';
import ProfileContent from '../../components/ProfileContent';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="py-12 max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br rounded-2xl border border-gray-300 p-8 mb-6">

          <div className="relative z-10 text-center max-w-sm mx-auto">
            <p className="text-gray-600 mb-6 text-lg">Аудармаларады ұсыну үшін өз аккаунтыңызға кіріңіз</p>

            <div className="flex flex-col space-y-4 items-center">
              <SignInButton>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 ease-in-out flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Кіру
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="w-full bg-white text-gray-700 border border-gray-200 font-medium py-3 px-8 rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-0.5 transition duration-200 ease-in-out flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Тіркелу
                </button>
              </SignUpButton>
            </div>

            <div className="mt-10 text-sm text-gray-500">
              <p>Join our community of language enthusiasts and contribute to preserving cultural heritage through words.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <ProfileContent userId={userId} />;
} 
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import { ruRU } from '@clerk/localizations'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Audarma",
  description: "Your personal dictionary",
};

const localization = {
  signUp: {
    start: {
      title: 'Аккаунт жасау',
      subtitle: '{{applicationName}} жалғастыру үшін',
      actionText: 'Аккаунтыңыз бар ма?',
      actionLink: 'Кіру',
    },
    emailLink: {
      title: 'Электрондық поштаңызды растаңыз',
      subtitle: '{{applicationName}} жалғастыру үшін',
      formTitle: 'Растау сілтемесі',
      formSubtitle: 'Электрондық поштаңызға жіберілген растау сілтемесін пайдаланыңыз',
      resendButton: 'Сілтеме келмеді ме? Қайта жіберу',
      verified: {
        title: 'Тіркелу сәтті аяқталды',
      },
      loading: {
        title: 'Тіркелу...',
      },
      verifiedSwitchTab: {
        title: 'Электрондық пошта сәтті расталды',
        subtitle: 'Жалғастыру үшін жаңадан ашылған қойындыға оралыңыз',
        subtitleNewTab: 'Жалғастыру үшін алдыңғы қойындыға оралыңыз',
      },
    },
    emailCode: {
      title: 'Электрондық поштаңызды растаңыз',
      subtitle: '{{applicationName}} жалғастыру үшін',
      formTitle: 'Растау коды',
      formSubtitle: 'Электрондық поштаңызға жіберілген растау кодын енгізіңіз',
      resendButton: 'Код келмеді ме? Қайта жіберу',
    },
    phoneCode: {
      title: 'Телефон нөміріңізді растаңыз',
      subtitle: '{{applicationName}} жалғастыру үшін',
      formTitle: 'Растау коды',
      formSubtitle: 'Телефон нөміріңізге жіберілген растау кодын енгізіңіз',
      resendButton: 'Код келмеді ме? Қайта жіберу',
    },
    continue: {
      title: 'Жетіспейтін өрістерді толтырыңыз',
      subtitle: '{{applicationName}} жалғастыру үшін',
      actionText: 'Аккаунтыңыз бар ма?',
      actionLink: 'Кіру',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          <main className="pt-16 min-h-screen max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

import './globals.css';
import Navbar from './components/navbar';
import { Merriweather, Lato } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['100', '300', '400', '700'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${lato.variable}`}>
      <body className="font-lato">
        <div className="flex min-h-screen flex-col">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow w-full max-w-[1200px] px-12 py-4 mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

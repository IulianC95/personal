import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/core/Header';
import { Bodoni_Moda } from 'next/font/google';
import Footer from './components/core/Footer';
import Main from './components/core/Main';

const inter = Inter({ subsets: ['latin'] });
const bodoniModa = Bodoni_Moda({ subsets: ['latin'] });

export const metadata = {
  title: 'Recipe Finder',
  description: 'An Web App that helps you cook.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-xl center m-auto h-full flex flex-col">
        <Header></Header>

        <Main></Main>

        <Footer></Footer>
      </body>
    </html>
  );
}

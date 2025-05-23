import 'bootstrap/dist/css/bootstrap.min.css';
import '@/globals.css';

// Google Fonts using next/font
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BootstrapClient from './utils/BootstrapClient';


export const metadata = {
  title: 'Future It Solution',
  description: 'Front-end Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}

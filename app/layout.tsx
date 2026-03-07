// header & footer
import './ui/global.css'
import Header from './ui/header';
import Footer from './ui/footer';
import { lusitana } from './ui/fonts';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <html lang="en">
          <head>
            <title>Furniture Store</title>
            <meta name="description" content="Explore our furniture collection" />
            <link rel="icon" href="/favicon.ico" />
          </head>
          <body className={lusitana.className}>
            <Header />
            {children}
            <Footer />            
          </body>
        </html>
    );
  }


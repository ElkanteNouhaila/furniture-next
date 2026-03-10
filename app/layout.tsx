// header & footer
import './ui/global.css'
import Header from './components/header';
import Footer from './components/footer';
import { lusitana } from './ui/fonts';

export default function RootLayout({children,}: {children: React.ReactNode;}) {
    return (
        <html lang="en">
          <head>
            <title>Luxury Touch</title>
            <meta name="description" content="Explore our furniture collection" />
            <link rel="icon" href="/favicon.ico" />
          </head>
          <body className={`flex flex-col min-h-screen ${lusitana.className}`}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />            
          </body>
        </html>
    );
  }



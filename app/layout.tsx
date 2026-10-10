


import './ui/global.css';
import Header from './components/header';
import Footer from './components/footer';
import { lusitana } from './ui/fonts';
import { CartProvider } from './context/cartContext'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Applies the saved theme (or system preference) before first paint
  // to avoid a flash of the wrong theme on load/navigation.
  const themeInitScript = `
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var dark = stored
          ? stored === 'dark'
          : window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (dark) document.documentElement.classList.add('dark');
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Luxury Touch</title>
        <meta name="description" content="Explore our furniture collection" />
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`flex flex-col min-h-screen ${lusitana.className}`}>
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
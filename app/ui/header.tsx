import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-stone-300 p-4 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"><Link href="/">Luxury Touch</Link></h1>
        <ul className="flex gap-4">
          <li><Link href="/" className="hover:text-stone-500">Home</Link></li>
          <li><Link href="/categories" className="hover:text-stone-500">Products</Link></li>
          <li><Link href="/contact" className="hover:text-stone-500">Contact</Link></li>
          <li><Link href="/about" className="hover:text-stone-500">About</Link></li>

        </ul>
      </nav>
    </header>
  );
}
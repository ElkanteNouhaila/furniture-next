import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-stone-300 p-4 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Luxury Touch</h1>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/categories">Products</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
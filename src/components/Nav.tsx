import Link from 'next/link';

export default function Nav() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">G</div>
          <span className="font-semibold">meaPERITIA</span>
        </div>
        <nav className="hidden md:flex gap-6 text-md">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#skills" className="hover:underline">Tech Stack</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#connect" className="hover:underline">Let's Connect</Link>
        </nav>
      </div>
    </header>
  );
}

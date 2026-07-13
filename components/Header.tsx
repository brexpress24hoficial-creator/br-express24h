"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/atendimento", label: "Atendimento" },
  { href: "/parceiro", label: "Parceiro" },
  { href: "/entrar", label: "Entrar" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-black text-yellow-400"
        >
          BR <span className="text-white">EXPRESS 24H</span>
        </Link>

        <nav className="hidden md:flex gap-8">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

        </nav>

        <Link
          href="/atendimento"
          className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
        >
          Solicitar Atendimento
        </Link>

      </div>
    </header>
  );
}
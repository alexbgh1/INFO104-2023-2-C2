import Link from "next/link";

const links = [
  { nombre: "Home", url: "/" },
  { nombre: "Ejemplo 1", url: "/ejemplo-1" },
  { nombre: "Ejemplo 2", url: "/ejemplo-2" },
  { nombre: "Ejemplo 3", url: "/ejemplo-3" },
  { nombre: "Ejemplo 4", url: "/ejemplo-4" },
  { nombre: "Ejemplo 5", url: "/ejemplo-5" },
  { nombre: "Ejemplo 6", url: "/ejemplo-6" },
  { nombre: "Ejemplo 7", url: "/ejemplo-7" },
];
export default function Header() {
  return (
    <nav className="navegacion">
      {links.map((link) => (
        <Link href={link.url} key={link.url}>
          {link.nombre}
        </Link>
      ))}
    </nav>
  );
}

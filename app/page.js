import Link from "next/link";

export default function Home() {
  return (
    <main className="center">
      <Link
        target="_blank" // target='_blank': abre en una nueva pestaña
        className="link"
        href="https://github.com/alexbgh1/info104-2023-2-db"
      >
        https://github.com/alexbgh1/info104-2023-2-db
      </Link>
    </main>
  );
}

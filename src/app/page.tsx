import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 text-6xl">
        Notes App 📝
        <Link className="text-7xl text-center text-red-400" href="/notes">
          ¡Entra aquí para agregar tu nota!
        </Link>
      </main>
    </>
  );
}

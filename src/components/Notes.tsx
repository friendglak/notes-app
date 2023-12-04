import { getData } from "@/app/services/api";
import { Pencil, Scroll } from "lucide-react";
import Link from "next/link";
import DeleteButton from "./Buttons/Delete";

export default async function Notes() {
  const notes = await getData();
  return (
    <>
      <main className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-6">Mi lista de notas</h1>

        <Link
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
          href="/addNote"
        >
          Agregar Nota
        </Link>
        <ul className="flex flex-wrap items-start gap-4 justify-start mt-5">
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex flex-col justify-between mb-6 p-4 border rounded-xl w-full max-w-[31.46%] bg-slate-50"
            >
              <h2 className="text-2xl font-bold mb-2">{note.title}</h2>
              <p className="text-gray-600 mb-4 truncate">{note.description}</p>
              <p>Estado: {note.state}</p>
              <p>{note.created_at.toLocaleString()}</p>
              <div className="mt-4 space-x-4 flex flex-row">
                <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  <Link title="Detalles" href={`/detailNote/${note.id}`}>
                    <Scroll size={24} />
                  </Link>
                </span>
                <span className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
                  <Link title="Editar" href={`/editNote/${note.id}`}>
                    <Pencil size={24} />
                  </Link>
                </span>
                <DeleteButton id={note.id} />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

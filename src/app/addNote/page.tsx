"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://server-notes-api.onrender.com/api/notes/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Math.floor(Math.random() * 1000),
            title,
            description,
            state,
            created_at: new Date(),
          }),
        }
      );
      if (res.ok) {
        router.push("/notes");
      } else {
        throw new Error("Error al crear la nota");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 max-w-[400px] mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-extrabold text-black">
                  Crear Nota
                </h1>
              </div>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Título:
                  </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    name="title"
                    className="p-3 border rounded-xl w-full text-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción:
                  </label>
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name="description"
                    className="p-3 border rounded-xl w-full text-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Estado:
                  </label>
                  <select
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    name="state"
                    className="p-3 border rounded-xl w-full text-black"
                    required
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completada">Completada</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="p-3 bg-blue-500 text-white rounded-xl flex-1"
                  >
                    Enviar
                  </button>
                  <button
                    type="button"
                    className="p-3 bg-red-500 text-white rounded-xl flex-1"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditNoteForm({ id, title, description, state }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newState, setNewState] = useState(state);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://server-notes-api.onrender.com/api/notes/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            'title': newTitle,
            'description': newDescription,
            'state': newState
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Error al editar la nota");
      }
      router.push("/notes");
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
                  Editar Nota
                </h1>
              </div>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Título:
                  </label>
                  <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
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
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
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
                    onChange={(e) => setNewState(e.target.value)}
                    value={newState}
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
                    Actualizar
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

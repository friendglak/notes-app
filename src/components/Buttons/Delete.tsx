"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();
  const removeNote = async () => {
    const confirmed = confirm("¿Estás seguro de eliminar esta nota?");

    if (confirmed) {
      const res = await fetch(
        `https://server-notes-api.onrender.com/api/notes/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
      onClick={removeNote}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      title="Eliminar"
    >
      <Trash2 />
    </button>
  );
}

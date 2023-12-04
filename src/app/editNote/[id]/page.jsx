import EditNoteForm from "@/components/EditNoteForm";

const getNoteById = async (id) => {
  try {
    const res = await fetch(
      `https://server-notes-api.onrender.com/api/notes/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Note");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function EditNote({ params }) {
  const id = params.id;
  const note = await getNoteById(id);
  const title = note[0].title
  const description = note[0].description
  const state = note[0].state

  return <EditNoteForm id={id} title={title} description={description} state={state} />
}

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

export default async function DetailNote({ params }) {
  const id = params.id;
  const note = await getNoteById(id);
  const title = note[0].title
  const description = note[0].description
  const state = note[0].state
  console.log(note);
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 max-w-[400px] mx-auto">
            <h1 className="text-[30px] font-bolt"> {title}</h1>
            <p className="my-[2.5vh]">Detalle: {description}</p>
            <span className="rounded-lg bg-red-500 py-[.5vh] px-[1.5vh]">{state}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

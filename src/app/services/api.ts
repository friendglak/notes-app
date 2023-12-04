interface Note {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  state: string;
}

async function getData(): Promise<Note[]> {
  try {
    const res = await fetch(
      "https://server-notes-api.onrender.com/api/notes/",
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "no-cors",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        console.error("Recursos no encontrados");
      } else {
        throw new Error("Failed to fetch data");
      }
    }

    return res.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}

export { getData };

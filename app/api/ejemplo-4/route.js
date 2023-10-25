const API_URL = "https://info104-2023-2-db.onrender.com";

// POST /api/comentarios: Crear un comentario

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  console.log(JSON.stringify(body));

  const res = await fetch(API_URL + "/api/comentarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json(data);
}

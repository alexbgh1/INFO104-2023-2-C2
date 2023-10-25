import { NextResponse } from "next/server";

const API_URL = "https://info104-2023-2-db.onrender.com";

// GET /api/comentarios/:id: Un comentario por ID

export async function GET(request, { params }) {
  const { id } = params;
  const response = await fetch(API_URL + `/api/comentarios/${id}`, { next: { revalidate: 10 } });
  const data = await response.json();
  return NextResponse.json(data);
}

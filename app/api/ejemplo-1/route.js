import { NextResponse } from "next/server";

const API_URL = "https://info104-2023-2-db.onrender.com";

// GET /api/comentarios: Todos los comentarios

export async function GET() {
  // Revalidate every 10 seconds
  // const response = await fetch(API_URL + "/api/comentarios", { next: { revalidate: 10 } });
  const response = await fetch(API_URL + "/api/comentarios", { cache: "no-cache" });
  const data = await response.json();
  console.log(data);
  return NextResponse.json(data);
}

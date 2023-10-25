import { NextResponse } from "next/server";

const API_URL = "https://info104-2023-2-db.onrender.com";

// GET /api/comentarios?idApp: Todos los comentarios de una app ("filtrados" por idApp)

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const idApp = searchParams.get("idApp");
  const idItem = searchParams.get("idItem");

  const response = await fetch(
    API_URL + `/api/comentarios?${idApp ? `idApp=${idApp}` : ""}${idItem ? `&idItem=${idItem}` : ""}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}

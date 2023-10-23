import { NextResponse } from "next/server";

const API_URL = "https://info104-2023-2-db.onrender.com";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const idApp = searchParams.get("idApp");
  console.log(idApp);

  const response = await fetch(API_URL + `/api/comentarios?idApp=${idApp}`, { next: { revalidate: 10 } });
  const data = await response.json();
  return NextResponse.json(data);
}

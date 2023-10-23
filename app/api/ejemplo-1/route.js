import { NextResponse } from "next/server";

const API_URL = "https://info104-2023-2-db.onrender.com";

export async function GET() {
  // Revalidate every 10 seconds
  const response = await fetch(API_URL + "/api/comentarios");
  const data = await response.json();
  console.log(data);
  return NextResponse.json(data);
}

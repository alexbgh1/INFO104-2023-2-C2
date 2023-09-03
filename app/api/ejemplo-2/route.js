import { NextResponse } from "next/server";
export const miArreglo = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    edad: 30,
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gonzalez",
    edad: 40,
  },
];

export async function GET() {
  return NextResponse.json(miArreglo);
}

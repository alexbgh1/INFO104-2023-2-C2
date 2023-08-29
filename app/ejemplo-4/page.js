"use client";

import { Box } from "@chakra-ui/react";

export default function Ejemplo4() {
  const cajas = [
    { nombre: "Caja 1", color: "red" },
    { nombre: "Caja 2", color: "blue" },
    { nombre: "Caja 3", color: "green" },
    { nombre: "Caja 4", color: "yellow" },
    { nombre: "Caja 5", color: "purple" },
  ];

  return (
    <div
      //   Estilo in-line
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1rem",
        padding: "0 2rem",
      }}
    >
      {cajas.map((caja) => (
        <Box key={caja.nombre} bg={caja.color} w="200px" p={4} color="white">
          {caja.nombre}
        </Box>
      ))}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Container, Box, Input } from "@chakra-ui/react";

export default function Ejemplo2() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("red");
  const colores = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
  ];

  // Los useEffect también se ejecutan de manera secuencial
  useEffect(() => {
    console.log("Cada vez que cambia 'nombre' se ejecuta este console.log()");
    const randomChoice = Math.floor(Math.random() * colores.length);
    setColor(colores[randomChoice]);
  }, [nombre]);

  useEffect(() => {
    console.log("Esto se ejecuta solo una vez al cargar la página");
    setColor("black");
  }, []);

  const handleInput = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div className="contenedor">
      <Container>
        <Input placeholder="Nombre" value={nombre} onChange={handleInput} />
        <Box w="100%" h="100px" bg={color}></Box>
      </Container>
    </div>
  );
}

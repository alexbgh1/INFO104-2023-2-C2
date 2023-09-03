"use client";

import { useState } from "react";
import { Text, Container, Input } from "@chakra-ui/react";

export default function Ejemplo1() {
  const [nombre, setNombre] = useState("");

  const handleInput = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div className="contenedor">
      <Container>
        {/* 
        También se puede representar como
        1 <Input placeholder="Nombre" mb={4} value={nombre} onChange={(e) => setNombre(e.target.value)} />    ✔️
        2 <Input placeholder="Nombre" mb={4} value={nombre} onChange={(e) => {setNombre(e.target.value)}} />  ✔️
        3 <Input placeholder="Nombre" mb={4} value={nombre} onChange={(e) => {handleInput(e)}} />             ✔️
        4 <Input placeholder="Nombre" mb={4} value={nombre} onChange={handleInput} />                         ✔️ -> (versión más corta)
        5 <Input placeholder="Nombre" mb={4} value={nombre} onChange={setNombre(e.target.value)} />           ❌ -> bucle infinito
        
        En general al crear funciones "Arrow function" () => {}
        - Se puede omitir el return si es una sola línea de código (ejemplo: 1)
        - En el caso de acciones como onChange, onClick, etc, evita que la función se ejecute al cargar la página
        */}
        <Input placeholder="Nombre" value={nombre} onChange={handleInput} />
        <Text fontSize="xl" color="blue.500">
          {nombre}
        </Text>
      </Container>
    </div>
  );
}

"use client";
import ListComments from "@/app/components/ListComments";
// Solicitamos TODOS los comentarios

import { useState, useEffect } from "react";
import { Text, Container, Box } from "@chakra-ui/react";

export default function Ejemplo1() {
  const [comentarios, setComentarios] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/ejemplo-1");
      const data = await response.json();
      setComentarios(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="contenedor">
      <Container>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Obtener TODOS los Comentarios
          </Text>
          <ListComments
            comentarios={comentarios} // comentarios es un arreglo de objetos
          />
        </Box>
      </Container>
    </div>
  );
}

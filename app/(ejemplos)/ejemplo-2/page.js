"use client";
import ListItemComment from "@/app/components/ListItemComment";
// Solicitamos UN los comentarios

import { useState } from "react";
import { Input, Button, Text, Container, Box } from "@chakra-ui/react";

export default function Ejemplo2() {
  const [id, setId] = useState(""); // id del comentario a buscar
  const [comentario, setComentario] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const response = await fetch("/api/ejemplo-2/" + id);
      const data = await response.json();
      console.log(data);
      setComentario(data);
    };
    fetchData();
  };

  return (
    <div className="contenedor">
      <Container>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Obtener UN comentario por ID
          </Text>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Buscar por ID" mb={4} onChange={(e) => setId(e.target.value)} value={id} />
            <Button type="submit">Buscar</Button>
          </form>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4} color="red.500">
              {comentario.message && <Text>{comentario.message}</Text>}
            </Text>
            <ListItemComment comentario={comentario} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

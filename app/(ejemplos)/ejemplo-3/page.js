"use client";
import ListComments from "@/app/components/ListComments";
// Solicitamos TODOS los comentarios que coincidan con idApp

import { useState } from "react";
import { Input, Button, Text, Container, Box } from "@chakra-ui/react";

export default function Ejemplo3() {
  const [idApp, setIdApp] = useState(""); // idApp de los comentarios a buscar
  const [comentarios, setComentarios] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      // Query : idApp
      const response = await fetch("/api/ejemplo-3?idApp=" + idApp);
      const data = await response.json();
      console.log(data);
      setComentarios(data);
    };
    fetchData();
  };

  return (
    <div className="contenedor">
      <Container>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Obtener comentarios por idApp
          </Text>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Buscar por idApp" mb={4} onChange={(e) => setIdApp(e.target.value)} value={idApp} />
            <Button type="submit">Buscar</Button>
          </form>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4} color="red.500">
              {comentarios.message && <Text>{comentario.message}</Text>}
            </Text>
            <ListComments comentarios={comentarios} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

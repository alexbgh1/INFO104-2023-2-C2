"use client";
import ListItemComment from "@/app/components/ListItemComment";
// Eliminar UN comentario

import { useState } from "react";
import { Input, Button, Text, Container, Box } from "@chakra-ui/react";

export default function Ejemplo5() {
  const [id, setId] = useState(""); // id del comentario a eliminar
  const [comentario, setComentario] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendDeleteAction = async () => {
      const response = await fetch(`/api/ejemplo-5/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setComentario(data);
    };
    sendDeleteAction();
  };

  return (
    <div className="contenedor">
      <Container>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Eliminar UN comentario por ID
          </Text>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Eliminar por ID" mb={4} onChange={(e) => setId(e.target.value)} value={id} />
            <Button type="submit">Eliminar</Button>
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

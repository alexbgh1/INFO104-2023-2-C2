"use client";
import ListComments from "@/app/components/ListComments";
import CrearComentario from "./CrearComentario";
// Crear UN comentario

import { useState } from "react";
import { Text, Container, Box } from "@chakra-ui/react";

export default function Ejemplo4() {
  const [idItem, setIdItem] = useState("");
  const [usuario, setUsuario] = useState("");
  const [comentario, setComnetario] = useState("");
  const [enRespuestaA, setEnRespuestaA] = useState("");
  const [comentarios, setComentarios] = useState([]);

  return (
    <div className="contenedor">
      <Container>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Crear y eliminar un comentario
          </Text>
          <CrearComentario
            usuario={usuario}
            setUsuario={setUsuario}
            idItem={idItem}
            setIdItem={setIdItem}
            comentario={comentario}
            setComentario={setComnetario}
            enRespuestaA={enRespuestaA}
            setEnRespuestaA={setEnRespuestaA}
          />
          <Text fontSize="xl" fontWeight="bold" mb={4} color="red.500">
            {comentarios.message && <Text>{comentarios.message}</Text>}
          </Text>
          <ListComments comentarios={comentarios} />
        </Box>
      </Container>
    </div>
  );
}

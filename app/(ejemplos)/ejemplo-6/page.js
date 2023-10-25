"use client";
import ListItemComment from "@/app/components/ListItemComment";
// Ejemplo asociar comentario a un item

import { useEffect, useState } from "react";
import { Input, Button, Text, Container, Box } from "@chakra-ui/react";

export default function Ejemplo6() {
  const [data, setData] = useState([
    {
      id: 1,
      asignatura: "INFO104",
      nombre: "Tarea 1",
      descripcion: "Hacer una página web",
      fechaEntrega: "2023-11-29",
    },
    {
      id: 2,
      asignatura: "BAIN140",
      nombre: "Tarea 1",
      descripcion: "Hacer un video en inglés",
      fechaEntrega: "2023-11-15",
    },
  ]);

  return (
    <div className="contenedor">
      <Container>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Ejemplo asociar comentario a un item
          </Text>
          <Box>
            {data.map((tarea) => (
              <TareaItem key={tarea.id} tarea={tarea} />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
}

const TareaItem = ({ tarea }) => {
  const { id, asignatura, nombre, descripcion, fechaEntrega } = tarea;
  return (
    <Box border="1px" p={4} mb={4}>
      <Text>{asignatura}</Text>
      <Text>{nombre}</Text>
      <Text>{descripcion}</Text>
      <Text>{fechaEntrega}</Text>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Comentar
        </Text>
        <CrearComentario idItem={id} />
        <MostrarComentarios idItem={id} />
      </Box>
    </Box>
  );
};

const CrearComentario = ({ idItem }) => {
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Alert to receive name
    const usuario = prompt("Ingrese su nombre");
    const bodyMessage = {
      idApp: "test",
      idItem: idItem,
      usuario: usuario,
      comentario: "test",
      enRespuestaA: null,
      timestamp: Date.now(),
    };

    const sendRequest = async () => {
      const response = await fetch("/api/ejemplo-4", {
        method: "POST",
        body: JSON.stringify(bodyMessage),
      });
      const data = await response.json();
      console.log(data);
    };
    sendRequest();
    setComentario("");
  };
  return (
    <Box mb={4}>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} />
        <Button type="submit">Crear Comentario</Button>
      </form>
    </Box>
  );
};

const MostrarComentarios = ({ idItem }) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // En este caso arbitrariamente se usa idApp=test (Al ser fijo por cada grupo)
      const response = await fetch(`/api/ejemplo-3?idApp=test&idItem=${idItem}`);
      const data = await response.json();
      setComentarios(data);
    };
    fetchData();
  }, []);

  return (
    <Box>
      {comentarios.map((comentario) => (
        <ListItemComment key={comentario.id} comentario={comentario} />
      ))}
    </Box>
  );
};

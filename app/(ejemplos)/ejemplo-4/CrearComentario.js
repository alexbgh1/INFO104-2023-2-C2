import { Text, Input, Button, Box, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import ListItemComment from "@/app/components/ListItemComment";

const CrearComentario = ({
  usuario,
  setUsuario,
  comentario,
  setComentario,
  idItem,
  setIdItem,
  enRespuestaA,
  setEnRespuestaA,
}) => {
  const [ultimoComentario, setUltimoComentario] = useState({}); // [{}]

  const sendRequest = async () => {
    const response = await fetch("/api/ejemplo-4", {
      method: "POST",
      body: JSON.stringify({
        usuario: usuario,
        idApp: "test",
        idItem: idItem,
        comentario: comentario,
        timestamp: Date.now(),
        enRespuestaA: enRespuestaA === "" ? null : enRespuestaA,
      }),
    });

    const data = await response.json();
    console.log(data);
    setUltimoComentario(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendRequest();
    // Reset form
    setUsuario("");
    setComentario("");
    setIdItem("");
    setEnRespuestaA("");
  };

  return (
    <>
      {ultimoComentario.message && <Text>{ultimoComentario.message}</Text>}

      <Box>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          <Textarea placeholder="Comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} />
          <Input placeholder="idItem" value={idItem} onChange={(e) => setIdItem(e.target.value)} />
          <Input placeholder="En respuesta a" value={enRespuestaA} onChange={(e) => setEnRespuestaA(e.target.value)} />

          <Button type="submit">Crear Comentario</Button>
        </form>
      </Box>
      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Último comentario
        </Text>
        {ultimoComentario && <ListItemComment comentario={ultimoComentario} />}
      </Box>
    </>
  );
};

export default CrearComentario;

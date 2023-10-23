"use client";
import { Box, Text } from "@chakra-ui/react";
const ListItemComment = ({ comentario }) => {
  const { enRespuestaA, idApp, idItem, comentario: comment, timestamp, usuario, __v, _id } = comentario;

  return (
    <Box mb={4} border="1px solid #ccc" p={4}>
      {/* ID's */}
      <Box mb={4}>
        <Text fontSize="lg">
          <b className="accent">_id: </b>
          {_id}
        </Text>
        <Text>
          <b className="accent">enRespuestaA: </b>
          {enRespuestaA}
        </Text>
      </Box>
      {/* COMENTARIO */}
      <Box mb={4}>
        <Text>
          <b className="accent">comentario: </b>
          {comment}
        </Text>
      </Box>
      <Text>
        <b className="accent">idApp: </b>
        {idApp}
      </Text>
      {/* INFORMACIÓN EXTRA */}
      <Box>
        <Text>
          <b className="accent">idItem: </b>
          {idItem}
        </Text>
        <Text>
          <b className="accent">timestamp: </b>
          {timestamp}
        </Text>
        <Text>
          <b className="accent">usuario: </b>
          {usuario}
        </Text>
      </Box>
    </Box>
  );
};

export default ListItemComment;

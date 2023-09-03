"use client";

// Ahora hacemos una consulta pero desde el Cliente
import { useState } from "react";
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

export default function Ejemplo6() {
  const [datos, setDatos] = useState([]);

  // Usualmente se le llama "handler" a las funciones que manejan eventos: handleClick, handleSumit, etc.
  const realizarPeticion = async () => {
    const response = await fetch("/api/ejemplo-2", { method: "GET" });
    const data = await response.json();
    console.log("Obteniendo datos desde CLIENTE:", data);
    setDatos(data);
  };

  return (
    <div className="contenedor center">
      {/* Botón de consulta */}
      <Button
        bg={"red.300"}
        _hover={{ bg: "red.500" }}
        onClick={realizarPeticion}
        mb={4}
      >
        Realizar petición
      </Button>

      {/* Contenedor y tabla de los datos */}
      <Container>
        <Table variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Edad</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Existen Datos? 
            No -> Muestra el Componente "NoHayDatos"
            Si -> Recorre los datos y muestra el componente "Dato"
            */}
            {datos.length === 0 ? (
              <NoHayDatos />
            ) : (
              datos.map((dato) => <Dato key={dato.id} dato={dato} />)
            )}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
}

function NoHayDatos() {
  return (
    <Tr>
      <Td colSpan="4" textAlign="center">
        No hay datos
      </Td>
    </Tr>
  );
}

function Dato({ dato }) {
  return (
    <Tr key={dato.id}>
      <Td>{dato.id}</Td>
      <Td>{dato.nombre}</Td>
      <Td>{dato.apellido}</Td>
      <Td>{dato.edad}</Td>
    </Tr>
  );
}

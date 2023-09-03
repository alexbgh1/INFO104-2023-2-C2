"use client";

// Ahora podemos "dividir la carga" de la página, y hacer que el componente "ListaDePersonas" se encargue de mostrar los datos
import { Container, Card, CardHeader, CardBody } from "@chakra-ui/react";
export default function ListaDePersonas({ data }) {
  return (
    <Container>
      {data.map((persona) => (
        <Persona key={persona.id} persona={persona} />
      ))}
    </Container>
  );
}

const Persona = ({ persona }) => {
  return (
    <Card mb={4}>
      <CardHeader>
        {persona.nombre} {persona.apellido}
      </CardHeader>
      <CardBody>Edad: {persona.edad}</CardBody>
    </Card>
  );
};

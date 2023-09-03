"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
} from "@chakra-ui/react";

export default function Ejemplo3() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    // Intervalo "setInterval( () => {...}, delay )"
    const intervalo = setInterval(() => {
      setNumero((prev) => prev + 1);
    }, 1000);
    // Limpia el intervalo cuando se desmonta el componente
    // desmontar: Ejemplo al cambiar de página, o dejar de cargar el componente
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  useEffect(() => {
    if (numero === 101) {
      setNumero(0);
      alert("Se reiniciará el contador");
    }
  }, [numero]);

  return (
    <div className="contenedor center">
      <Container>
        <Card align="center">
          <CardHeader fontSize="2xl" fontWeight="bold">
            {numero}
          </CardHeader>
          <CardBody>
            <CircularProgress value={numero} />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

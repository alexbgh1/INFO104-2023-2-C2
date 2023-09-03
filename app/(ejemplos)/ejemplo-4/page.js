"use client";

import { useState, useEffect } from "react";
import { Skeleton, Container, Badge } from "@chakra-ui/react";

const formato = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export default function Ejemplo4() {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    async function fechaActual() {
      const tiempoActual = new Date().toLocaleString("es-CL", formato);
      setFecha(tiempoActual);
    }
    const intervalo = setInterval(fechaActual, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="contenedor center">
      <Container align="center">
        <>
          {fecha.length === 0 ? (
            <Skeleton height="20px" />
          ) : (
            <Badge
              fontSize="md"
              fontWeight="bold"
              colorScheme="purple"
              style={{
                wordBreak: "break-all",
              }}
            >
              {fecha}
            </Badge>
          )}
        </>
      </Container>
    </div>
  );
}

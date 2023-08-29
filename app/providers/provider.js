"use client";

// Creamos un componente que nos permita usar los providers de Chakra UI
// Hace de "envoltorio" de todo el contenido de nuestra aplicación
// Por las características de uso, debe ser manejado como "use client"

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}

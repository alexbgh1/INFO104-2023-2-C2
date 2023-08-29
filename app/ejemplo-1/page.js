"use client";
// ref: https://chakra-ui.com/docs/components/card/usage

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
export default function Ejemplo1() {
  return (
    <div className="contenedor">
      <Card>
        <CardHeader>Esto es el Header</CardHeader>
        <CardBody>Esto es el Body</CardBody>
        <CardFooter>Esto es el Footer</CardFooter>
      </Card>
    </div>
  );
}

"use client";
// ref: https://chakra-ui.com/docs/components/circular-progress/usage

import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

export default function Ejemplo5() {
  return (
    <div
      className="contenedor"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress value={60} size="120px">
        <CircularProgressLabel>60%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress isIndeterminate color="green.300" />
    </div>
  );
}

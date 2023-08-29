"use client";
// ref: https://chakra-ui.com/docs/components/toast

import { Button, useToast } from "@chakra-ui/react";

export default function Page() {
  const toast = useToast();

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}

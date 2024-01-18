"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

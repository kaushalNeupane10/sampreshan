"use client";

import type { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

interface Props {
  children: ReactNode;
}

export function QueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

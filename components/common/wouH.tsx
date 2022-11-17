import { ReactNode } from "react";

export function H2({ children }: { children: string | ReactNode }) {
  return <h2 className="text-grey text-6xl mt-8 mb-6 font-bold">{children}</h2>;
}

export function H4({ children }: { children: string }) {
  return <h4 className="text-grey text-4xl mt-6 mb-3 font-bold">{children}</h4>;
}

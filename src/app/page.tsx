import { Section } from "@/components/section/Section";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Codarse - Página Inicial",
  };


export default function PageHome() {
  return (
    <main>
      <Section
                title="Veja mais cursos"
                variant="h-list"
             />
    </main>
  );
}

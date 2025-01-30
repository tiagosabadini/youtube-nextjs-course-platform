import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Codarse - Todos os cursos",
  };

export default function PageCursos() {
    return (
        <main>
            <h2>Cursos</h2>

            <Section
                title="Todos os cursos"
                variant="grid"
             />
        </main>
    );
};

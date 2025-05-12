import React from 'react';
import { CourseGrid, DocumentGrid, ComplementaryGrid } from '../../components/CourseGrid';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-10 space-y-8">
      <h1 className="text-4xl font-bold">Bienvenido a la Plataforma 🚀</h1>

      <Section title="Cursos" description="Explora nuestros cursos y documentación para mejorar tus habilidades.">
        <CourseGrid />
      </Section>

      <Section
        title="Análisis y Desarrollo de Software - SENA"
        description="Consulta la documentación técnica detallada."
      >
        <DocumentGrid />
      </Section>

      <Section title="Formación complementaria - SENA" description="Consulta la documentación técnica detallada.">
        <ComplementaryGrid />
      </Section>

      <p className="text-lg">¡Esperamos que disfrutes el aprendizaje! 🎉</p>
    </main>
  );
}

interface SectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="w-full max-w-4xl">
      <div className=" rounded-lg p-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mb-4">{description}</p>
        {children}
      </div>
    </section>
  );
}

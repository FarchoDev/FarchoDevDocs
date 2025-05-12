import React from "react";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10">
      <div className="max-w-3xl w-full text-left">
        <h1 className="text-4xl font-bold mb-6 text-center">Acerca de este sitio</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Nuestra misión</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Este sitio web ha sido creado con el propósito de preservar y organizar de manera estructurada los materiales de formación utilizados en la <strong>Tecnología en Análisis y Desarrollo de Software</strong> del <strong>SENA</strong>. A medida que los aprendices avanzan en su proceso de formación, muchos de estos recursos desaparecen, dificultando su acceso en el futuro.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Aquí, centralizamos estos materiales para garantizar que cualquier aprendiz pueda consultarlos en cualquier momento, facilitando su aprendizaje y permitiéndoles reforzar sus conocimientos a lo largo del tiempo.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">📚 Material de formación</h2>
          <p className="text-gray-700 dark:text-gray-300">
            En esta sección, encontrarás una recopilación cronológica de los recursos utilizados durante la formación en el <strong>SENA</strong>. La información se presenta de manera organizada, asegurando que cada tema esté disponible en el orden en que se imparte en el programa de estudios.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🎓 Cursos adicionales</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Además del material oficial del <strong>SENA</strong>, este sitio también ofrece cursos complementarios diseñados para fortalecer habilidades clave en el desarrollo de software. Entre ellos, encontrarás cursos sobre <strong>Git, GitHub, Conventional Commits</strong> y otros temas fundamentales para la industria.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué es importante este sitio?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este espacio se ha construido con la intención de ser un <strong>recurso de consulta permanente</strong> para los aprendices y futuros desarrolladores. Al mantener un acceso ordenado y estructurado a estos conocimientos, buscamos facilitar el proceso de aprendizaje y contribuir a una mejor formación en el área de desarrollo de software.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contribuciones y mejoras</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Si tienes sugerencias, nuevos materiales o mejoras para este sitio, ¡serán bienvenidas! Nuestro objetivo es seguir ampliando y optimizando este espacio para que sea un referente útil y confiable para toda la comunidad de aprendices del <strong>SENA</strong>.
          </p>
        </section>
        
        <p className="text-lg text-center font-medium mt-6">¡Esperamos que disfrutes el aprendizaje! 🎉</p>
      </div>
    </main>
  );
}

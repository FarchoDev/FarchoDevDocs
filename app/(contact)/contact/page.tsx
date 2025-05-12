import React from "react";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📬 ¿Tienes dudas o sugerencias?</h2>
          <p className="text-muted mb-4">
            Si deseas ponerte en contacto para realizar consultas, sugerencias o contribuir con nuevos materiales para este sitio, puedes hacerlo a través de los siguientes medios:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">📧 Correo Electrónico</h2>
          <p className="mb-2">Para cualquier inquietud o propuesta de colaboración, puedes escribirnos a:</p>
          <p className="font-medium">farchodev@gmail.com</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🌐 GitHub</h2>
          <p className="mb-2">Mantente actualizado con las novedades y mejoras del sitio a través de nuestro repositorio:</p>
          <a href="https://github.com/FarchoDev/FarchoDev_Docs_1.1.0" target="_blank" className="text-indigo-600 hover:underline">
            github.com/FarchoDev
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">📝 Formulario de contacto</h2>
          <p className="mb-4">Si prefieres, puedes enviarnos un mensaje directamente desde el sitio completando el siguiente formulario:</p>
          <p className="italic text-gray-500">[Formulario de Contacto] (Próximamente)</p>
        </section>

        <p className="text-center text-lg font-medium">¡Gracias por tu interés y apoyo! 🚀</p>
      </div>
    </main>
  );
}

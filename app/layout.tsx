import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';


const inter = Inter({
  subsets: ['latin'],
});

// app/layout.tsx o layout.js
export const metadata = {
  title: 'Farcho Dev',
  description: 'Un espacio creado para aprendices del SENA que organiza y preserva materiales de formación, cursos adicionales y recursos clave para fortalecer el aprendizaje en desarrollo de software.',
  icons: {
    icon: '/images/favicon.ico',
  },
};


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Banner variant="rainbow" id="bienvenida-aprendiz">
          ¡Hola aprendiz! Este espacio fue creado para acompañarte en tu camino como desarrollador. Descubre contenido útil, claro y práctico.
        </Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { domAnimation, LazyMotion } from "framer-motion";


// Definición de cursos y documentación
const courses = [
  {
    title: "Curso Git",
    link: "./docs/cursos/git_curso",
    images: {
      light: "/images/index-images/cursos/git-logo.svg",
      dark: "/images/index-images/cursos/git-logo-dark.svg",
    },
  },
  {
    title: "Curso Github",
    link: "./docs/cursos/github_curso",
    images: {
      light: "/images/index-images/cursos/github-logo.svg",
      dark: "/images/index-images/cursos/github-logo-dark.svg",
    },
  },
  {
    title: "Curso Conventional Commits",
    link: "./docs/cursos/cc_curso",
    images: {
      light: "/images/index-images/cursos/conventional-commits-logo.svg",
      dark: "/images/index-images/cursos/conventional-commits-logo-dark.svg",
    },
  },
  {
    title: "Shift Left Testing en Desarrollo Ágil",
    link: "./docs/cursos/shift-left-testingen-desarrolloagil",
    images: {
      light: "/images/index-images/cursos/ShiftLeftTesting.svg",
      dark: "/images/index-images/cursos/ShiftLeftTesting.svg",
    },
  },
];

const documents = [
  {
    title: "Sistemas operativos de red",
    link: "./docs/sena/ads_docs/sistemas-operativos-de-red",
    images: {
      light: "/images/index-images/documentacion/001.svg",
      dark: "/images/index-images/documentacion/001.svg",
    },
  },
  {
    title: "Redes y networking",
    link: "./docs/sena/ads_docs/redes-y-networking",
    images: {
      light: "/images/index-images/documentacion/002.svg",
      dark: "/images/index-images/documentacion/002.svg",
    },
  },
  {
    title: "Paradigma orientado a objetos",
    link: "./docs/sena/ads_docs/paradigma-orientado-a-objetos",
    images: {
      light: "/images/index-images/documentacion/006.svg",
      dark: "/images/index-images/documentacion/006.svg",
    },
  },
  {
    title: "Contenedores",
    link: "./docs/sena/ads_docs/contenedores-documentos",
    images: {
      light: "/images/index-images/documentacion/004.svg",
      dark: "/images/index-images/documentacion/004.svg",
    },
  },
  {
    title: "Virtualización",
    link: "./docs/sena/ads_docs/virtualizacion",
    images: {
      light: "/images/index-images/documentacion/003.svg",
      dark: "/images/index-images/documentacion/003.svg",
    },
  },
  {
    title: "Documentación y entrega",
    link: "/docs/sena/actividades-de-documentacion-y-entrega-de-software-en-procesos-de-implantacion/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/005.svg",
      dark: "/images/index-images/documentacion/005.svg",
    },
  },
  {
    title: "Fundamentos de calidad del software",
    link: "/docs/sena/ads_docs/fundamentos-de-la-calidad-del-software",
    images: {
      light: "/images/index-images/documentacion/007.svg",
      dark: "/images/index-images/documentacion/007.svg",
    },
  },
  {
    title: "Aplicación de pruebas de software",
    link: "/docs/sena/actividades-de-documentacion-y-entrega-de-software-en-procesos-de-implantacion/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/008.svg",
      dark: "/images/index-images/documentacion/008.svg",
    },
  },
];

const complementary = [
  {
    title: "Automatización de procesos para la eficiencia organizacional",
    link: "/docs/sena/fc_docs/automatizacion-de-procesos-para-la-eficiencia-organizacional",
    images: {
      light: "/images/index-images/documentacion/008.svg",
      dark: "/images/index-images/documentacion/008.svg",
    },
  },
];

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Componente reutilizable para mostrar tarjetas
const GridItem = memo(({ title, link, images }) => {
  const { theme, resolvedTheme } = useTheme();
  const imageSrc = (resolvedTheme || theme) === "dark" ? images.dark : images.light;

  return (
    <motion.div
    className="text-center p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 flex flex-col justify-between h-full"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-40 h-40 mx-auto flex items-center justify-center">
      <Image src={imageSrc} alt={title} width={160} height={160} className="rounded-lg" priority={false} />
    </div>
    <p
      className="text-lg font-semibold mt-2 text-gray-800 dark:text-gray-200 line-clamp-2 overflow-hidden cursor-pointer"
      title={title} // Tooltip nativo
    >
    {title}
    </p>

    <Link href={link} passHref>
      <motion.button
        className="mt-auto px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Ver más
      </motion.button>
    </Link>
  </motion.div>
  
  );
});


// Componente contenedor de cuadrícula
function GridContainer({ items }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }, // Eliminado staggerChildren
      }}
    >
      {items.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </motion.div>
  );
}


// Componente de la cuadrícula de cursos
export function CourseGrid() {
  const memoizedCourses = useMemo(() => courses, []);
  return <GridContainer items={memoizedCourses} />;
}

// Componente de la cuadrícula de documentación
export function DocumentGrid() {
  const memoizedDocuments = useMemo(() => documents, []);
  return <GridContainer items={memoizedDocuments} />;
}

// Componente de la cuadrícula de cursos complementarios
export function ComplementaryGrid() {
  const memoizedComplementary = useMemo(() => complementary, []);
  return <GridContainer items={memoizedComplementary} />;
}

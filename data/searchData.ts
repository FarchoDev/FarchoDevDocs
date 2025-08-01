// Combined search data for all content
import { courses } from './courses';
import { documents } from './documents';
import { complementary } from './complementary';

export interface SearchResult {
  id: string;
  title: string;  
  description: string;
  category: string;
  link: string;
  type: 'course' | 'documentation' | 'guide';
}

// Transform courses data
const courseSearchData: SearchResult[] = courses.map((course, index) => ({
  id: `course-${index}`,
  title: course.title,
  description: `Curso práctico sobre ${course.title.toLowerCase()}. Aprende paso a paso con ejemplos y ejercicios.`,
  category: 'Cursos',
  link: course.link,
  type: 'course'
}));

// Transform documents data  
const documentSearchData: SearchResult[] = documents.map((doc, index) => ({
  id: `doc-${index}`,
  title: doc.title,
  description: `Documentación técnica sobre ${doc.title.toLowerCase()}. Contenido del programa ADS-SENA.`,
  category: 'ADS-SENA',
  link: doc.link,
  type: 'documentation'
}));

// Transform complementary data
const complementarySearchData: SearchResult[] = complementary.map((comp, index) => ({
  id: `comp-${index}`,
  title: comp.title,
  description: `Formación complementaria en ${comp.title.toLowerCase()}. Contenido especializado del SENA.`,
  category: 'Formación Complementaria',
  link: comp.link,
  type: 'guide'
}));

// Additional featured content
const featuredSearchData: SearchResult[] = [
  {
    id: 'featured-1',
    title: 'Guía de Buenas Prácticas en Git',
    description: 'Aprende las mejores prácticas para usar Git en proyectos profesionales.',
    category: 'Guías',
    link: '/docs/cursos/git_curso/buenas-practicas',
    type: 'guide'
  },
  {
    id: 'featured-2', 
    title: 'Introducción al Testing en Software',
    description: 'Conceptos fundamentales sobre pruebas de software y metodologías de testing.',
    category: 'Testing',
    link: '/docs/sena/ads_docs/fundamentos-de-la-calidad-del-software',
    type: 'documentation'
  },
  {
    id: 'featured-3',
    title: 'Containerización con Docker',
    description: 'Guía práctica para trabajar con contenedores Docker en desarrollo.',
    category: 'DevOps',
    link: '/docs/sena/ads_docs/contenedores-documentos',
    type: 'documentation'
  },
  {
    id: 'featured-4',
    title: 'Fundamentos de Redes',
    description: 'Conceptos esenciales de networking y configuración de redes.',
    category: 'Redes',
    link: '/docs/sena/ads_docs/redes-y-networking',
    type: 'documentation'
  },
  {
    id: 'featured-5',
    title: 'Programación Orientada a Objetos',
    description: 'Principios y patrones de la programación orientada a objetos.',
    category: 'Programación',
    link: '/docs/sena/ads_docs/paradigma-orientado-a-objetos',
    type: 'documentation'
  }
];

// Combine all search data
export const allSearchData: SearchResult[] = [
  ...courseSearchData,
  ...documentSearchData, 
  ...complementarySearchData,
  ...featuredSearchData
];

// Featured items for homepage
export const featuredItems = [
  {
    id: 'featured-1',
    title: 'Curso Git Completo',
    description: 'Domina Git desde lo básico hasta técnicas avanzadas de versionado.',
    type: 'course' as const,
    link: '/docs/cursos/git_curso',
    featured: true,
    trending: true,
    recent: false,
    readTime: '4h'
  },
  {
    id: 'featured-2',
    title: 'Contenedores Docker',
    description: 'Aprende containerización y orchestration con Docker y Kubernetes.',
    type: 'documentation' as const,
    link: '/docs/sena/ads_docs/contenedores-documentos',
    featured: true,
    trending: false,
    recent: true,
    readTime: '2h'
  },
  {
    id: 'featured-3',
    title: 'Testing y Calidad',
    description: 'Metodologías de testing y aseguramiento de calidad en software.',
    type: 'guide' as const,
    link: '/docs/sena/ads_docs/fundamentos-de-la-calidad-del-software',
    featured: true,
    trending: true,
    recent: false,
    readTime: '3h'
  },
  {
    id: 'trending-1',
    title: 'GitHub Actions',
    description: 'Automatiza tu flujo de trabajo con GitHub Actions y CI/CD.',
    type: 'course' as const,
    link: '/docs/cursos/github_curso',
    featured: false,
    trending: true,
    recent: false,
    readTime: '2h'
  },
  {
    id: 'trending-2',
    title: 'Redes y Networking',
    description: 'Fundamentos de redes, protocolos y configuración de sistemas.',
    type: 'documentation' as const,
    link: '/docs/sena/ads_docs/redes-y-networking',
    featured: false,
    trending: true,
    recent: false,
    readTime: '5h'
  },
  {
    id: 'recent-1',
    title: 'Conventional Commits',
    description: 'Estandariza tus commits con la especificación Conventional Commits.',
    type: 'course' as const,
    link: '/docs/cursos/cc_curso',
    featured: false,
    trending: false,
    recent: true,
    readTime: '1h'
  },
  {
    id: 'recent-2',
    title: 'Virtualización',
    description: 'Conceptos y herramientas de virtualización en entornos IT.',
    type: 'documentation' as const,
    link: '/docs/sena/ads_docs/virtualizacion',
    featured: false,
    trending: false,
    recent: true,
    readTime: '3h'
  }
];
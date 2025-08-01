// Category data for the new homepage structure
import { courses } from './courses';
import { documents } from './documents';
import { complementary } from './complementary';

export interface Category {
  id: string;
  title: string;
  description: string;
  itemCount: number;
  items: Array<{
    title: string;
    link: string;
    images: {
      light: string;
      dark: string;
    };
  }>;
  gradient: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'cursos',
    title: 'Cursos Especializados',
    description: 'Cursos prácticos sobre herramientas y tecnologías fundamentales para el desarrollo de software.',
    itemCount: courses.length,
    items: courses,
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🎓'
  },
  {
    id: 'ads-sena', 
    title: 'Análisis y Desarrollo de Software',
    description: 'Documentación técnica completa del programa ADS del SENA, organizada por competencias.',
    itemCount: documents.length,
    items: documents,
    gradient: 'from-green-500 to-emerald-500',
    icon: '💻'
  },
  {
    id: 'formacion-complementaria',
    title: 'Formación Complementaria',
    description: 'Cursos y contenidos adicionales para ampliar conocimientos y habilidades profesionales.',
    itemCount: complementary.length,
    items: complementary,
    gradient: 'from-purple-500 to-pink-500',
    icon: '📚'
  }
];

// Stats for the homepage
export const stats = [
  {
    label: 'Cursos Disponibles',
    value: courses.length,
    icon: '🎓',
    color: 'text-blue-600'
  },
  {
    label: 'Documentos Técnicos',
    value: documents.length,
    icon: '📖',
    color: 'text-green-600'
  },
  {
    label: 'Recursos Totales',
    value: courses.length + documents.length + complementary.length,
    icon: '📚',
    color: 'text-purple-600'
  },
  {
    label: 'Horas de Contenido',
    value: '50+',
    icon: '⏱️',
    color: 'text-orange-600'
  }
];
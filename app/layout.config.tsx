import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: 'Farcho Dev',
  },
  links: [
    {
      text: 'Inicio',
      url: '/',
      active: 'nested-url',},
    {
      type: 'menu',
      text: 'Análisis y Desarrollo de Software',
      items: [
        {
          text: 'Sistemas operativos de red',
          url: '/docs/sena/ads_docs/sistemas-operativos-de-red',          
        },
        {
          text: 'Redes y networking',
          url: '/docs/sena/ads_docs/redes-y-networking',          
        },
        {
          text: 'Paradigma orientado a objetos',
          url: '/docs/sena/ads_docs/paradigma-orientado-a-objetos',          
        },
        {
          text: 'Contenedores',
          url: '/docs/sena/ads_docs/contenedores-documentos',          
        },
        {
          text: 'Virtualización',
          url: '/docs/sena/ads_docs/virtualizacion',          
        },
        {
          text: 'Documentación y entrega',
          url: '/docs/sena/fc_docs',          
        },
        {
          text: 'Fundamentos de calidad del software',
          url: '/docs/sena/ads_docs/fundamentos-de-la-calidad-del-software',          
        },
        {
          text: 'Aplicación de pruebas de software',
          url: '/docs/sena/fc_docs',          
        },
      ],
    },
    {
      type: 'menu',
      text: 'Formación complementaria',
      items: [
        {
          text: 'Automatización de procesos para la eficiencia organizacional',
          url: '/docs/sena/fc_docs/automatizacion-de-procesos-para-la-eficiencia-organizacional',          
        },
      ],
    },
    {
      type: 'menu',
      text: 'Cursos',
      items: [
        {
          text: 'Git',
          url: '/docs/cursos/git_curso',          
        },
        {
          text: 'GitHub',
          url: '/docs/cursos/github_curso',          
        },
        {
          text: 'Conventional Commits',
          url: '/docs/cursos/cc_curso',          
        },
        {
          text: 'Shift Left Testing en Desarrollo Ágil',
          url: '/docs/cursos/shift-left-testingen-desarrolloagil',          
        },
      ],
    },
    {
      text: 'Contacto',
      url: '/contact',
      active: 'nested-url',
    },
    {
      text: 'Acerca de',
      url: '/about',
      active: 'nested-url',
    },
  ],
};

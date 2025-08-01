import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CategorySection } from '@/components/sections/CategorySection';
import { FeaturedSection } from '@/components/sections/FeaturedSection';
import { StatsSection } from '@/components/stats/StatsSection';
import { SearchBar } from '@/components/search/SearchBar';
import { categories, stats } from '@/data/categories';
import { featuredItems, allSearchData } from '@/data/searchData';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Search Section */}
      <section className="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Qué quieres aprender hoy?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Busca entre cursos, documentación y guías especializadas
          </p>
          <SearchBar 
            data={allSearchData}
            placeholder="Buscar cursos, documentación, guías..."
            onResultClick={(result) => {
              // Analytics tracking could go here
              console.log('Search result clicked:', result);
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Categories Section */}
      <CategorySection categories={categories} />

      {/* Featured Content Section */}
      <FeaturedSection items={featuredItems} />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu aprendizaje?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a cientos de estudiantes que ya están fortaleciendo sus habilidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Explorar Documentación
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
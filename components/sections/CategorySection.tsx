'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
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

interface CategorySectionProps {
  categories: Category[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Contenido Organizado por Categorías
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Explora nuestro contenido estructurado en categorías específicas para facilitar tu aprendizaje
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
        <CardHeader>
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4`}>
            <span className="text-2xl">{category.icon}</span>
          </div>
          <CardTitle className="text-xl">{category.title}</CardTitle>
          <CardDescription className="text-base">
            {category.description}
          </CardDescription>
          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {category.itemCount} recursos disponibles
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {category.items.slice(0, 4).map((item, itemIndex) => (
              <Link key={itemIndex} href={item.link}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-pointer group"
                >
                  <div className="w-full h-16 relative mb-2 rounded overflow-hidden">
                    <Image
                      src={item.images.light}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 line-clamp-2">
                    {item.title}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
          
          import Link from "next/link";

          <Button
            asChild
            variant="outline"
            className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors"
          >
            <Link href={`/category/${category.id}`}>
              Ver Todos los Recursos
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { StarIcon, TrendingUpIcon, ClockIcon } from '@heroicons/react/24/solid';

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'documentation' | 'guide';
  link: string;
  featured: boolean;
  trending: boolean;
  recent: boolean;
  readTime?: string;
  image?: string;
}

interface FeaturedSectionProps {
  items: FeaturedItem[];
}

export function FeaturedSection({ items }: FeaturedSectionProps) {
  const featuredItems = items.filter(item => item.featured);
  const trendingItems = items.filter(item => item.trending);
  const recentItems = items.filter(item => item.recent);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Featured Content */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <StarIcon className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Contenido Destacado
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.slice(0, 3).map((item, index) => (
              <FeaturedCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Trending & Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trending */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-6"
            >
              <TrendingUpIcon className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Más Populares
              </h3>
            </motion.div>
            
            <div className="space-y-4">
              {trendingItems.slice(0, 4).map((item, index) => (
                <TrendingItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Recent */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-6"
            >
              <ClockIcon className="w-6 h-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Agregado Recientemente
              </h3>
            </motion.div>
            
            <div className="space-y-4">
              {recentItems.slice(0, 4).map((item, index) => (
                <RecentItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ item, index }: { item: FeaturedItem; index: number }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'documentation': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'guide': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
              {item.type === 'course' ? 'Curso' : item.type === 'documentation' ? 'Documentación' : 'Guía'}
            </span>
            <StarIcon className="w-4 h-4 text-yellow-500" />
          </div>
          <CardTitle className="text-lg">{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            {item.readTime && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.readTime} lectura
              </span>
            )}
            <Button variant="ghost" size="sm" href={item.link}>
              Leer más →
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TrendingItem({ item, index }: { item: FeaturedItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors cursor-pointer"
    >
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
          {item.title}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
          {item.description}
        </p>
      </div>
      <TrendingUpIcon className="w-4 h-4 text-green-500 ml-2" />
    </motion.div>
  );
}

function RecentItem({ item, index }: { item: FeaturedItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer"
    >
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
          {item.title}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
          {item.description}
        </p>
        {item.readTime && (
          <span className="text-xs text-blue-600 dark:text-blue-400">
            {item.readTime}
          </span>
        )}
      </div>
      <ClockIcon className="w-4 h-4 text-blue-500 ml-2" />
    </motion.div>
  );
}
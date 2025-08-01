'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contenido de Calidad
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recursos educativos estructurados y actualizados para tu formación profesional
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="text-center group"
    >
      <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 group-hover:shadow-lg transition-shadow duration-300">
        <div className="text-4xl mb-3">{stat.icon}</div>
        <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
          {stat.value}
        </div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}
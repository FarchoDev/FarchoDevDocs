'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronDownIcon, 
  BookOpenIcon, 
  CodeBracketIcon, 
  AcademicCapIcon,
  HomeIcon,
  UserIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface MenuItem {
  text: string;
  url: string;
  icon?: React.ReactNode;
  active?: string;
  items?: MenuItem[];
  type?: 'menu' | 'link';
}

interface NavigationMenuProps {
  items: MenuItem[];
  className?: string;
}

export function NavigationMenu({ items, className }: NavigationMenuProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const getIcon = (text: string) => {
    switch (text.toLowerCase()) {
      case 'inicio': return <HomeIcon className="w-4 h-4" />;
      case 'contacto': return <EnvelopeIcon className="w-4 h-4" />;
      case 'acerca de': return <UserIcon className="w-4 h-4" />;
      default: return null;
    }
  };

  const getCategoryIcon = (text: string) => {
    if (text.includes('Análisis y Desarrollo')) return <CodeBracketIcon className="w-4 h-4" />;
    if (text.includes('Formación complementaria')) return <AcademicCapIcon className="w-4 h-4" />;
    if (text.includes('Cursos')) return <BookOpenIcon className="w-4 h-4" />;
    return <BookOpenIcon className="w-4 h-4" />;
  };

  return (
    <nav className={cn('hidden lg:flex items-center space-x-1', className)}>
      {items.map((item, index) => (
        <div key={index} className="relative">
          {item.type === 'menu' && item.items ? (
            <div className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === item.text ? null : item.text)}
                onMouseEnter={() => setOpenMenu(item.text)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {getCategoryIcon(item.text)}
                <span className="ml-2">{item.text}</span>
                <ChevronDownIcon className={cn(
                  'ml-1 w-4 h-4 transition-transform duration-200',
                  openMenu === item.text ? 'rotate-180' : ''
                )} />
              </button>

              <AnimatePresence>
                {openMenu === item.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 py-2"
                  >
                    <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                        {getCategoryIcon(item.text)}
                        <span className="ml-2">{item.text}</span>
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {item.items.length} recursos disponibles
                      </p>
                    </div>
                    
                    <div className="max-h-80 overflow-y-auto">
                      {item.items.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.url}>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.03 }}
                            className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setOpenMenu(null)}
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="truncate">{subItem.text}</span>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href={item.url}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {getIcon(item.text)}
              <span className="ml-2">{item.text}</span>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
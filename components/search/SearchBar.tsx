'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import Fuse from 'fuse.js';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  type: 'course' | 'documentation' | 'guide';
}

interface SearchBarProps {
  data: SearchResult[];
  placeholder?: string;
  className?: string;
  onResultClick?: (result: SearchResult) => void;
}

export function SearchBar({ data, placeholder = "Buscar cursos, documentación...", className, onResultClick }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Configure Fuse.js for fuzzy search
  const fuse = new Fuse(data, {
    keys: ['title', 'description', 'category'],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true,
  });

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = fuse.search(query).slice(0, 8);
      setResults(searchResults.map(result => result.item));
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery('');
    setIsOpen(false);
    onResultClick?.(result);
    // Navigate to result
    window.location.href = result.link;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return '📚';
      case 'documentation': return '📖';
      case 'guide': return '📝';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20';
      case 'documentation': return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20';
      case 'guide': return 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/20';
      default: return 'text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-900/20';
    }
  };

  return (
    <div ref={searchRef} className={cn('relative w-full max-w-2xl mx-auto', className)}>
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 2 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            <div className="p-2">
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    'flex items-start p-3 rounded-lg cursor-pointer transition-colors',
                    selectedIndex === index 
                      ? 'bg-blue-50 dark:bg-blue-900/20' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  )}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <span className="text-lg">{getTypeIcon(result.type)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {result.title}
                      </h4>
                      <span className={cn(
                        'px-2 py-0.5 rounded-full text-xs font-medium',
                        getTypeColor(result.type)
                      )}>
                        {result.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {result.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {results.length === 8 && (
              <div className="border-t border-gray-200 dark:border-gray-600 p-3 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mostrando los primeros 8 resultados. Refina tu búsqueda para encontrar más contenido específico.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && query.length > 2 && results.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 p-4 text-center"
        >
          <div className="text-gray-500 dark:text-gray-400">
            <MagnifyingGlassIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No se encontraron resultados para "{query}"</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
"use client";

import { memo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default GridItem;

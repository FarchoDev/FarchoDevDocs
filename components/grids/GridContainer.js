"use client";

import { motion } from "framer-motion";
import GridItem from "../items/GridItem";

function GridContainer({ items }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }, // Eliminado staggerChildren
      }}
    >
      {items.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </motion.div>
  );
}
export default GridContainer;


import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: {}, // ✅ Eliminamos la advertencia incluyendo la configuración actual
};

export default withMDX(config);

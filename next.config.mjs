import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Add custom configurations here
    config.resolve.alias['@server'] = path.join(__dirname, 'src/server');
    return config;
  },
};

export default nextConfig;

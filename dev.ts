import { serve } from 'bun';
import { Hono } from 'hono';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import { join } from 'path';

// Get the directory where this script is located
const BASE_DIR = import.meta.dir;

// CSS cache for processed files
const cssCache = new Map<string, { content: string; timestamp: number }>();

async function processCSS(filePath: string): Promise<string> {
  const file = Bun.file(filePath);
  const content = await file.text();

  // Process with PostCSS + Tailwind
  const result = await postcss([tailwindcss()]).process(content, {
    from: filePath,
  });

  return result.css;
}

// Create Hono app for API routes
const api = new Hono()
  .get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }))
  .get('/version', (c) => c.json({ version: '0.1.0', runtime: 'Bun' }));

// Simple dev server with hot reload and API support
const server = serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle API routes with Hono
    if (path.startsWith('/api/')) {
      return api.fetch(request);
    }

    // Serve static files from src directory
    if (path.startsWith('/src/')) {
      const filePath = join(BASE_DIR, path);
      const file = Bun.file(filePath);

      if (await file.exists()) {
        const ext = path.split('.').pop();

        // For CSS files, process through PostCSS/Tailwind
        if (ext === 'css') {
          try {
            const processedCSS = await processCSS(filePath);
            return new Response(processedCSS, {
              headers: {
                'Content-Type': 'text/css',
                'Cache-Control': 'no-cache',
              },
            });
          } catch (error) {
            console.error('CSS processing error:', error);
            return new Response(`/* CSS Error: ${error} */`, {
              headers: { 'Content-Type': 'text/css' },
              status: 500,
            });
          }
        }

        const contentType = {
          tsx: 'text/javascript',
          ts: 'text/javascript',
          js: 'text/javascript',
        }[ext || ''] || 'text/plain';

        // For TS/TSX files, we need to transpile them
        if (ext === 'tsx' || ext === 'ts') {
          const result = await Bun.build({
            entrypoints: [filePath],
            target: 'browser',
            // Bundle all dependencies for browser execution
            external: [],
          });

          if (result.success && result.outputs[0]) {
            const code = await result.outputs[0].text();
            return new Response(code, {
              headers: {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'no-cache',
              },
            });
          }
        }

        return new Response(file, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache',
          },
        });
      }
    }

    // SPA fallback: serve index.html for all other routes
    // This allows React Router to handle client-side routing
    const html = await Bun.file(join(BASE_DIR, 'index.html')).text();
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
});

console.log(`🚀 Dev server running at http://localhost:${server.port}`);
console.log(`📡 API endpoints:`);
console.log(`   - http://localhost:${server.port}/api/health`);
console.log(`   - http://localhost:${server.port}/api/version`);

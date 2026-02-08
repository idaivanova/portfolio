import { build } from 'bun';

// Build for production
console.log('Building for production...');

const result = await build({
  entrypoints: ['./src/main.tsx'],
  outdir: './dist',
  target: 'browser',
  splitting: true,
  minify: true,
  sourcemap: 'external',
});

if (result.success) {
  console.log('✅ Build successful!');

  // Copy index.html to dist
  const html = await Bun.file('./index.html').text();
  // Update script path for built files
  const updatedHtml = html.replace('/src/main.tsx', '/main.js');
  await Bun.write('./dist/index.html', updatedHtml);

  console.log('📦 Output in ./dist');
} else {
  console.error('❌ Build failed:', result.logs);
  process.exit(1);
}

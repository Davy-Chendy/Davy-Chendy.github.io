import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const root = fileURLToPath(new URL('../', import.meta.url));
export async function build() {
  let html = await readFile(path.join(root, 'index.html'), 'utf8');
  for (const [marker, file] of [['PROFILE', 'profile.md'], ['CONTENT', 'main.md']]) {
    const token = `<!-- ${marker} -->`;
    if (!html.includes(token)) throw new Error(`Missing ${marker} insertion point`);
    html = html.replace(token, await readFile(path.join(root, 'content', file), 'utf8'));
  }
  await mkdir(path.join(root, 'dist'), { recursive: true });
  await writeFile(path.join(root, 'dist/index.html'), html);
  for (const asset of ['images', 'favicon.svg', 'robots.txt', 'sitemap.xml', '404.html', '.nojekyll']) {
    await cp(path.join(root, asset), path.join(root, 'dist', asset), { recursive: true });
  }
  console.log('Built dist/: all content is readable without JavaScript.');
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();

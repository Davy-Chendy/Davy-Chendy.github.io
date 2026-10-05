import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { build, root } from './build.mjs';

await build();
const directory = path.join(root, 'dist');
const portIndex = process.argv.indexOf('--port');
const port = Number(portIndex >= 0 ? process.argv[portIndex + 1] : process.env.PORT || 4321);
const types = { '.html':'text/html; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.txt':'text/plain; charset=utf-8', '.xml':'application/xml' };
createServer(async (req, res) => {
  try {
    const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.resolve(directory, '.' + requested);
    if (file !== directory && !file.startsWith(directory + path.sep)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type':'text/html; charset=utf-8' });
    res.end(await readFile(path.join(directory, '404.html')));
  }
}).listen(port, '127.0.0.1', () => console.log(`Homepage preview: http://127.0.0.1:${port}\nAfter editing content, run npm run build and refresh.`));

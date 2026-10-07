import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5500);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    const target = path.resolve(root, relative);
    if (target !== root && !target.startsWith(root + path.sep)) {
      res.writeHead(403).end('Acceso denegado');
      return;
    }
    if (!(await stat(target)).isFile()) {
      res.writeHead(404).end('Archivo no encontrado');
      return;
    }
    const data = await readFile(target);
    res.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404).end('Archivo no encontrado');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`UniDash: http://localhost:${port}`);
  console.log('Pulsa Ctrl+C para detener el servidor.');
});
server.on('error', (error) => {
  console.error(`No se pudo iniciar el servidor: ${error.message}`);
  console.error('Si el puerto está ocupado, cierra el otro servidor o cambia PORT.');
  process.exitCode = 1;
});

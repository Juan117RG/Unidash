import { readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
function files(dir) { return readdirSync(dir, { withFileTypes: true }).flatMap(item => item.isDirectory() ? files(`${dir}/${item.name}`) : [`${dir}/${item.name}`]); }
const targets = ['server.mjs', ...files('js'), ...files('scripts'), ...files('tests')].filter(file => /\.(js|mjs)$/.test(file));
for (const file of targets) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log(`Sintaxis correcta en ${targets.length} archivos JavaScript.`);

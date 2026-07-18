import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const clientRoot = path.join(distRoot, 'client');
const serverRoot = path.join(distRoot, 'server');

await rm(clientRoot, { recursive: true, force: true });
await rm(serverRoot, { recursive: true, force: true });
await mkdir(clientRoot, { recursive: true });
await mkdir(serverRoot, { recursive: true });

const entries = await readdir(distRoot, { withFileTypes: true });
for (const entry of entries) {
  if (entry.name === 'client' || entry.name === 'server') continue;
  await cp(path.join(distRoot, entry.name), path.join(clientRoot, entry.name), {
    recursive: entry.isDirectory(),
  });
}

await cp(path.join(projectRoot, 'worker', 'index.js'), path.join(serverRoot, 'index.js'));

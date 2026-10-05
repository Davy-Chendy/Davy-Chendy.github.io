import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { build, root } from './build.mjs';

await build();
const html = await readFile(path.join(root, 'dist/index.html'), 'utf8');
assert.equal(await readFile(path.join(root, 'index.html'), 'utf8'), html, 'Root page must match the preview');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate element IDs');
for (const [, target] of html.matchAll(/\bhref="#([^"]+)"/g)) assert(ids.includes(target), `Missing anchor: #${target}`);
for (const [, url] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  if (/^(?:https?:|mailto:|#)/.test(url)) continue;
  await access(path.join(root, url));
}
for (const [, script] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(script);
assert.equal((html.match(/class="paper-card"/g) || []).length, 3, 'Expected three published papers');
assert.equal((html.match(/class="patent-number"/g) || []).length, 3, 'Expected three granted patents');
assert(!/Alex Chen|Stanford|placeholder|FATE|Under Review|137\s*2837|2001\/12|\.pdf["<]/i.test(html), 'Demo or non-public content in output');
assert(!/<!-- (PROFILE|CONTENT) -->|marked\.parse|fetch\(/.test(html), 'Content must be rendered at build time');
console.log('Checks passed: content, anchors, assets, JavaScript syntax, and public-content boundaries.');

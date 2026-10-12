import fs from 'node:fs';
import { createRequire } from 'node:module';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const source = fs.readFileSync('components/seo/LegalServiceDepthGuide.tsx', 'utf8');
const output = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
    jsx: ts.JsxEmit.ReactJSX,
    esModuleInterop: true,
  },
}).outputText;

const moduleRecord = { exports: {} };
new Function('require', 'module', 'exports', output)(require, moduleRecord, moduleRecord.exports);
const { LegalServiceDepthGuide } = moduleRecord.exports;

const kinds = [
  'estate-planning',
  'probate',
  'guardianship',
  'poa-guardianship',
  'real-estate',
  'deeds',
];

function visibleWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

let failed = false;

for (const kind of kinds) {
  const html = renderToStaticMarkup(React.createElement(LegalServiceDepthGuide, {
    kind,
    locationName: 'Example County, Illinois',
    courtName: 'Example County Circuit Court',
  }));
  const words = visibleWordCount(html);
  console.log(`${kind}: ${words} visible words`);
  if (words < 1500) failed = true;
}

if (failed) {
  console.error('One or more legal-service guides are below the 1,500-word minimum.');
  process.exit(1);
}

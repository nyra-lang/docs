#!/usr/bin/env node
/**
 * Sync webDocs/nyra-skill.md → skills/skill.md for repo agents.
 * Edit nyra-skill.md as the canonical source.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SOURCE = path.join(ROOT, 'webDocs', 'nyra-skill.md');
const SKILLS_OUT = path.join(ROOT, 'skills', 'skill.md');

const body = fs.readFileSync(SOURCE, 'utf8');
const header = `# Nyra Programming Language\n\n> Canonical copy: \`webDocs/nyra-skill.md\`. Regenerate with \`node webDocs/scripts/build-nyra-skill.mjs\`.\n\n`;
const stripped = body.replace(
  /^# Nyra Programming Language\n\n> Canonical copy:[^\n]*\n\n(?:# Nyra Programming Language\n\n> Canonical copy:[^\n]*\n\n)*/,
  ''
);

fs.writeFileSync(SKILLS_OUT, header + stripped);
console.log('skills/skill.md synced from webDocs/nyra-skill.md');

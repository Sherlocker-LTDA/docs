import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { PAGE_SCENES } from "../visuals/scene-catalog.mjs";
import { SCENES, renderSceneSvg } from "../visuals/sketch-system.mjs";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(repositoryRoot, "images", "sketches");

const escapeAttribute = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

await mkdir(outputDirectory, { recursive: true });

const sceneIds = [...new Set(PAGE_SCENES.map(({ scene }) => scene))];
for (const sceneId of sceneIds) {
  const svg = renderSceneSvg(sceneId).replace(/[ \t]+\n/g, "\n");
  await writeFile(join(outputDirectory, `${sceneId}.svg`), svg, "utf8");
}

for (const page of PAGE_SCENES) {
  const absolutePath = join(repositoryRoot, page.path);
  const source = await readFile(absolutePath, "utf8");
  const scene = SCENES[page.scene];
  const imageSource = `/images/sketches/${page.scene}.svg`;
  const marker = `src="${imageSource}"`;

  if (!scene) throw new Error(`Cena não registrada: ${page.scene}`);

  const image = `<img src="${imageSource}" alt="${escapeAttribute(scene.description)}" />`;
  if (source.includes(marker)) {
    const framedImage = new RegExp(`<Frame>\\s*<img src="${imageSource.replaceAll("/", "\\/")}" alt="[^"]*" \\/>\\s*<\\/Frame>`);
    const updated = source.replace(framedImage, image);
    if (updated !== source) await writeFile(absolutePath, updated, "utf8");
    continue;
  }

  const frontmatterEnd = source.indexOf("\n---", 4);
  if (frontmatterEnd === -1) throw new Error(`Frontmatter inválido: ${page.path}`);

  const insertionPoint = source.indexOf("\n", frontmatterEnd + 4) + 1;
  const visual = `${image}\n`;

  const updated = `${source.slice(0, insertionPoint)}\n${visual}${source.slice(insertionPoint)}`;
  await writeFile(absolutePath, updated, "utf8");
}

console.log(`Renderizadas ${sceneIds.length} cenas para ${PAGE_SCENES.length} páginas.`);

/**
 * Knock out near-white matte from the badge logo PNG (true transparency).
 * Run: node scripts/remove-logo-white.mjs
 */
import sharp from "sharp";
import { rename, unlink } from "fs/promises";
import { join } from "path";

const root = process.cwd();
const rel = join("public", "logo-chicago-pool-services.png");
const inputPath = join(root, rel);
const tmpPath = join(root, "public", "logo-chicago-pool-services.tmp.png");

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
if (channels !== 4) {
  throw new Error(`Expected RGBA, got ${channels} channels`);
}

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;
  const lum = (r + g + b) / 765;

  if (r >= 246 && g >= 246 && b >= 246) {
    data[i + 3] = 0;
    continue;
  }

  if (lum >= 0.9 && sat <= 0.12) {
    const fade = Math.min(1, (lum - 0.9) / 0.1);
    data[i + 3] = Math.max(0, Math.round(a * (1 - fade * fade)));
  }
}

await sharp(Buffer.from(data), {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(tmpPath);

await unlink(inputPath).catch(() => {});
await rename(tmpPath, inputPath);

console.log("Updated", rel);

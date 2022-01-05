import { get } from '../';
import { GeoJSON } from 'geojson';
import { promises as fs } from 'fs';

function extname(path: string): string {
  const pos = path.lastIndexOf('.');
  if (pos) {
    return path.substr(pos + 1);
  }
  return '';
}

async function convert(path: string): Promise<GeoJSON> {
  const ext = extname(path);
  const converter = get(ext);
  if (!converter) {
    throw new Error(`Unsupported format: ext <${ext}>`);
  }
  const data = await fs.readFile(path, 'utf8');
  return await converter(data);
}

(async () => {
  const input = process.argv[2];
  const output = process.argv[3];
  const gj = await convert(input);
  await fs.writeFile(output, JSON.stringify(gj), 'utf8');
})();

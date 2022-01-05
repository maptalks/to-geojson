import { GeoJSON } from 'geojson';
import { parse } from 'wellknown';
import { register } from './registry';
import { ConvertOptions } from './types';

export function wkt(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  const gj = parse(data);
  if (!gj) {
    throw new Error('invalid wkt string');
  }
  return Promise.resolve(gj as GeoJSON);
}

register('wkt', wkt);

import { GeoJSON } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';

export function geojson(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  return Promise.resolve(JSON.parse(data));
}

register(['geojson', 'json'], geojson);

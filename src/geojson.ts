import { GeoJSON } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';

function convert(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  return Promise.resolve(JSON.parse(data));
}

register(['geojson', 'json'], convert);

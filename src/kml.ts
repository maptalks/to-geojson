import { kml as fromKml } from '@tmcw/togeojson';
import { GeoJSON } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';
import { parseXML } from './util';

export function kml(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  const doc = parseXML(data);
  return Promise.resolve(fromKml(doc));
}

register('kml', kml);

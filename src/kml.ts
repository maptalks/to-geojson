import toGeoJSON from '@tmcw/togeojson';
import { GeoJSON } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';
import { parseXML } from './util';

export function kml(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  const doc = parseXML(data);
  return Promise.resolve(toGeoJSON.kml(doc));
}

register('kml', kml);

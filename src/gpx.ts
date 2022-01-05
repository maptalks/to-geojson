import toGeoJSON from '@tmcw/togeojson';
import { GeoJSON } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';
import { parseXML } from './util';

export function gpx(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  const doc = parseXML(data);
  return Promise.resolve(toGeoJSON.gpx(doc));
}

register('gpx', gpx);

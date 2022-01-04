import toGeoJSON from '@mapbox/togeojson';
import { GeoJSON } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';
import { parseXML } from './util';

function convert(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  const doc = parseXML(data);
  return Promise.resolve(toGeoJSON.kml(doc));
}

register('kml', convert);

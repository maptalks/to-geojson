import { GeoJSON } from 'geojson';
import { osm2geojson } from './bundle/osm2geojson';
import { register } from './registry';
import { ConvertOptions } from './types';
import { parseXML } from './util';

function convert(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  const doc = parseXML(data);
  const gj = osm2geojson(doc);
  return Promise.resolve(gj);
}

register('osm', convert);

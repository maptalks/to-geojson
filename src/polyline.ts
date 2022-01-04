import { decode } from '@mapbox/polyline';
import { GeoJSON, LineString } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';

function convert(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  options = options || {};
  const coords = decode(data, options.precision);
  const gj: LineString = { type: 'LineString', coordinates: [] };
  for (let i = 0; i < coords.length; i++) {
    // polyline returns coords in lat, lng order, so flip for geojson
    gj.coordinates[i] = [coords[i][1], coords[i][0]];
  }
  return Promise.resolve(gj);
}

register('polyline', convert);

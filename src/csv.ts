import { csv2geojson } from 'csv2geojson';
import { GeoJSON } from 'geojson';
import { register } from './registry';
import { ConvertOptions } from './types';

export function csv(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  return new Promise((resolve, reject) => {
    options = options || {};
    options.lonfield = options.lon;
    options.latfield = options.lat;
    csv2geojson(data, options, (err: Error, gj: GeoJSON) => {
      if (err) {
        return reject(err);
      }
      return resolve(gj);
    });
  });
}

register(['csv', 'xlsx'], csv);

import { GeoJSON } from 'geojson';
import { feature } from 'topojson-client';
import { Topology } from 'topojson-specification';
import { register } from './registry';
import { ConvertOptions } from './types';

export function topojson(data: any, options?: ConvertOptions): Promise<GeoJSON> {
  const json: GeoJSON = {
    type: 'FeatureCollection',
    features: [],
  };
  const o: Topology = typeof data === 'string' ? JSON.parse(data) : data;
  for (const key in o.objects) {
    const f = feature(o, o.objects[key]);
    if (f.type === 'FeatureCollection') {
      for (let i = 0; i < f.features.length; i++) {
        json.features.push(f.features[i]);
      }
    } else {
      json.features.push(f);
    }
  }
  return Promise.resolve(json);
}

register('topojson', topojson);

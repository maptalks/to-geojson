import { GeoJSON } from 'geojson';

export type ConvertOptions = { [key: string]: any };

export type Converter = (
  data: any,
  options?: ConvertOptions,
) => Promise<GeoJSON>;

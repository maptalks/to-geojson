import { Converter } from './types';

const registry: { [key: string]: Converter } = {};

export function register(ext: string | string[], converter: Converter): void {
  if (typeof ext === 'string') {
    registry[ext] = converter;
  } else {
    for (let i = 0; i < ext.length; i++) {
      registry[ext[i]] = converter;
    }
  }
}

export function get(ext: string): Converter | null {
  return registry[ext];
}

// import { DOMParser } from 'xmldom';

export function parseXML(input: string | Document): Document {
  if (typeof input === 'string') {
    return new DOMParser().parseFromString(input, 'text/xml');
  } else {
    return input;
  }
}

import { expect } from 'chai';
import { readFile, readJSON } from 'fs-extra';
import { csv, geojson, gpx, kml, osm, polyline, topojson, wkt } from '../';

async function readAsText(path: string): Promise<string> {
  return await readFile(path, 'utf8');
}

describe('formats', async () => {
  it('csv', async () => {
    const data = await readAsText('./test/data/csv.csv');
    const gj = await csv(data);
    const want = await readJSON('./test/fixtures/csv.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('csv with options', async () => {
    const data = await readAsText('./test/data/options.csv');
    const gj = await csv(data, {lon: 'a', lat: 'b'});
    const want = await readJSON('./test/fixtures/options.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('geojson', async () => {
    const data = await readAsText('./test/data/geojson.geojson');
    const gj = await geojson(data);
    const want = await readJSON('./test/fixtures/geojson.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('gpx', async () => {
    const data = await readAsText('./test/data/gpx.gpx');
    const gj = await gpx(data);
    const want = await readJSON('./test/fixtures/gpx.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('kml', async () => {
    const data = await readAsText('./test/data/kml.kml');
    const gj = await kml(data);
    const want = await readJSON('./test/fixtures/kml.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('kml 3cm', async () => {
    const data = await readAsText('./test/data/3cm.kml');
    const gj = await kml(data);
    const want = await readJSON('./test/fixtures/3cm.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('osm', async () => {
    const data = await readAsText('./test/data/osm.osm');
    const gj = await osm(data);
    const want = await readJSON('./test/fixtures/osm.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('polyline', async () => {
    const data = await readAsText('./test/data/polyline.polyline');
    const gj = await polyline(data);
    const want = await readJSON('./test/fixtures/polyline.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('topojson', async () => {
    const data = await readAsText('./test/data/topojson.topojson');
    const gj = await topojson(data);
    const want = await readJSON('./test/fixtures/topojson.geojson');
    expect(gj).to.deep.equal(want);
  });

  it('wkt', async () => {
    const data = await readAsText('./test/data/wkt.wkt');
    const gj = await wkt(data);
    const want = await readJSON('./test/fixtures/wkt.geojson');
    expect(gj).to.deep.equal(want);
  });
});

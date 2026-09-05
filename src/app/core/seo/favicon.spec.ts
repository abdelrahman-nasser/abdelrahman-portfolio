/// <reference types="node" />

import { readFileSync, statSync } from 'node:fs';

const PNG_HEADER = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const ICO_HEADER = Buffer.from([0x00, 0x00, 0x01, 0x00]);

describe('browser branding favicon assets', () => {
  it('should have a valid 16x16 PNG favicon asset', () => {
    const path = 'public/favicon-16x16.png';
    const buffer = readFileSync(path);

    expect(statSync(path).size).toBeGreaterThan(0);
    expect(buffer.subarray(0, 8)).toEqual(PNG_HEADER);
    expect(buffer.readUInt32BE(16)).toBe(16);
    expect(buffer.readUInt32BE(20)).toBe(16);
  });

  it('should have a valid 32x32 PNG favicon asset', () => {
    const path = 'public/favicon-32x32.png';
    const buffer = readFileSync(path);

    expect(statSync(path).size).toBeGreaterThan(0);
    expect(buffer.subarray(0, 8)).toEqual(PNG_HEADER);
    expect(buffer.readUInt32BE(16)).toBe(32);
    expect(buffer.readUInt32BE(20)).toBe(32);
  });

  it('should have a valid 180x180 apple touch icon asset', () => {
    const path = 'public/apple-touch-icon.png';
    const buffer = readFileSync(path);

    expect(statSync(path).size).toBeGreaterThan(0);
    expect(buffer.subarray(0, 8)).toEqual(PNG_HEADER);
    expect(buffer.readUInt32BE(16)).toBe(180);
    expect(buffer.readUInt32BE(20)).toBe(180);
  });

  it('should have a valid multi-resolution favicon.ico asset', () => {
    const path = 'public/favicon.ico';
    const buffer = readFileSync(path);

    expect(statSync(path).size).toBeGreaterThan(0);
    expect(buffer.subarray(0, 4)).toEqual(ICO_HEADER);

    const imageCount = buffer.readUInt16LE(4);
    expect(imageCount).toBeGreaterThanOrEqual(2);

    const dimensions: { width: number; height: number }[] = [];
    for (let i = 0; i < imageCount; i++) {
      const entryOffset = 6 + i * 16;
      const width = buffer[entryOffset] || 256;
      const height = buffer[entryOffset + 1] || 256;
      dimensions.push({ width, height });
    }

    expect(dimensions.some((d) => d.width === 16 && d.height === 16)).toBe(true);
    expect(dimensions.some((d) => d.width === 32 && d.height === 32)).toBe(true);
  });

  it('should declare root-relative favicons and touch icon in index.html', () => {
    const indexHtml = readFileSync('src/index.html', 'utf8');

    expect(indexHtml).toContain('<link rel="icon" type="image/x-icon" href="/favicon.ico" />');
    expect(indexHtml).toContain(
      '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />',
    );
    expect(indexHtml).toContain(
      '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />',
    );
    expect(indexHtml).toContain(
      '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />',
    );

    // Verify obsolete relative path is not present
    expect(indexHtml).not.toContain('href="favicon.ico"');
  });
});

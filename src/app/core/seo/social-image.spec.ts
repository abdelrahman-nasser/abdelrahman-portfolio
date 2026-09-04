/// <reference types="node" />

import { readFileSync, statSync } from 'node:fs';

import { SOCIAL_IMAGE_HEIGHT, SOCIAL_IMAGE_PATH, SOCIAL_IMAGE_WIDTH } from './seo.service';

const imagePath = `public${SOCIAL_IMAGE_PATH}`;

describe('social preview image', () => {
  it('should be a non-empty 1200 by 630 PNG', () => {
    const image = readFileSync(imagePath);

    expect(statSync(imagePath).size).toBeGreaterThan(0);
    expect(image.subarray(0, 8)).toEqual(
      Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    );
    expect(image.readUInt32BE(16)).toBe(Number(SOCIAL_IMAGE_WIDTH));
    expect(image.readUInt32BE(20)).toBe(Number(SOCIAL_IMAGE_HEIGHT));
  });
});

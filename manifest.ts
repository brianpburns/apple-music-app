import type { Manifest } from 'smart-builder-sdk';

const manifest: Manifest = {
  appId: '@unbounce/appleMusic',
  version: '0.1',
  name: 'Apple Music',
  isBeta: true,
  isSwappable: true,
  type: 'media',
  description: 'Embed music from Apple Music',
  iconUrl:
    'https://app-assets-unbounce-com.s3.amazonaws.com/content-smart-builder-apps/ship-it-day/apple-music/icon.svg',
  moreInfoUrl: 'https://en.wikipedia.org/wiki/%22Hello,_World!%22_program',
  categories: ['media'],
  files: [],
  externalScripts: ['http://localhost:8081/index.js'],
};
export default manifest;

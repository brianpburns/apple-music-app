import { validateUrl, generateUrl } from './index';

describe('getSongId', () => {
  test('returns song ID', () => {
    const result = validateUrl('https://music.apple.com/us/album/melting-in-a-shallow-body-of-water-single/1616725863');

    expect(result).toBeTruthy();
  });

  test('returns playlist ID', () => {
    const result = validateUrl('https://open.spotify.com/playlist/');

    expect(result).toBeFalsy();
  });
});

describe('generateUrl', () => {
  test('generates correct url', () => {
    const result = generateUrl('https://music.apple.com/us/album/melting-in-a-shallow-body-of-water-single/1616725863');

    expect(result).toEqual(
      'https://embed.music.apple.com/us/album/melting-in-a-shallow-body-of-water-single/1616725863',
    );
  });
});

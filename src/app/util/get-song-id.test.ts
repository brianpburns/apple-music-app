import { getSongId } from './get-song-id';

describe('getSongId', () => {
  test('returns song ID', () => {
    const result = getSongId('https://open.spotify.com/track/5qZBvVFfd3rdfcSFOhLmLo?si=4f34b41753244396');

    expect(result).toEqual('5qZBvVFfd3rdfcSFOhLmLo');
  });

  test('returns playlist ID', () => {
    const result = getSongId(
      'https://open.spotify.com/playlist/5NNMKh5FQqTxNYk5av7Pos?si=daea3a77fedc48f2&pt=9d79f24536886d7a738f3beb59b57310',
    );

    expect(result).toEqual('5NNMKh5FQqTxNYk5av7Pos');
  });
});

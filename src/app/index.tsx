import { component, Schema } from 'ub-shared';

import SpotifyComponent from './components/spotify-component';

const schema = Schema.object({
  src: Schema.string(),
  compact: Schema.boolean().default(false),
}).noControls();

export const Component = component({
  componentTypeId: 'spotify',
  displayName: 'Spotify',
  tags: ['newControls', 'swappable', 'isFullWidth'],
  schema,
  Component: SpotifyComponent,
});

import { component, Schema } from 'ub-shared';

import AppleMusicComponent from './components/apple-music-component';

const schema = Schema.object({
  src: Schema.string(),
  compact: Schema.boolean().default(false),
});

export const Component = component({
  componentTypeId: 'appleMusic',
  displayName: 'Apple Music',
  tags: ['newControls', 'swappable', 'isFullWidth'],
  schema,
  Component: AppleMusicComponent,
});

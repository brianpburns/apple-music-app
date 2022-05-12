import React from 'react';
import { ControlButton, WithControls } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../types';
// import { getVideoId } from '../util/get-video-id';
import { Panel } from './control-panel';
import { Placeholder } from './placeholder';
import { SpotifyIcon as SettingsIcon } from './spotify-icon';
import { Overlay, Wrapper } from './styled';

const PromoComponent = ({ data, mode }: ComponentProps<DataStructure, WithStylesProps>) => {
  const { src } = data;

  // const videoId = getVideoId(src);
  // const loop = mode.type !== 'edit' && loopVideo ? '&loop=1' : '';
  // const shouldAutoPlay = mode.type !== 'edit' && autoPlay ? '&autoplay=1' : '';

  // <iframe
  //   height="80"
  // ></iframe>;

  return (
    <Wrapper>
      {mode.type === 'edit' && <Overlay />}
      {src ? (
        <iframe
          style={{ borderRadius: '12px' }}
          title="Spotify Player"
          src="https://open.spotify.com/embed/track/5qZBvVFfd3rdfcSFOhLmLo?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

const label = 'Add Promo Video';

export default WithControls(PromoComponent, [
  {
    id: 'design',
    label: label,
    Button: (props) => (
      <ControlButton label={label} active={false} {...props}>
        <SettingsIcon />
      </ControlButton>
    ),
    Panel,
  },
]);

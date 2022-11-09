import React from 'react';
import { ComponentProps, ControlButton, WithControls, WithStylesProps } from 'smart-builder-sdk';

import { DataStructure } from '../types';
import { generateUrl } from '../util';
import { Panel } from './control-panel';
import { Placeholder } from './placeholder';
import { SettingsIcon } from './settings-icon';
import { Overlay, Wrapper } from './styled';

const AppleMusicComponent = ({ data, mode }: ComponentProps<DataStructure, WithStylesProps>) => {
  const { src, compact } = data;

  return (
    <Wrapper hasSrc={!!src}>
      {mode.type === 'edit' && <Overlay />}
      {src ? (
        <iframe
          title="Apple Music Player"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height={compact ? '150' : '450'}
          style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent', border: 'none' }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          src={generateUrl(src)}
        ></iframe>
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

const label = 'Apple Music';

export default WithControls(AppleMusicComponent, [
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

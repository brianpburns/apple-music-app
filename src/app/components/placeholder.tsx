import React from 'react';
import styled from 'styled-components';

import { SpotifyIcon } from './spotify-icon';

const Wrapper = styled.div`
  background: #ededed;
  display: grid;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: 100%;
`;

export const Placeholder = () => {
  return (
    <Wrapper data-testid="video-placeholder">
      <SpotifyIcon />
    </Wrapper>
  );
};

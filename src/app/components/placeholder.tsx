import React from 'react';
import styled from 'styled-components';

import { AppleMusicIcon } from './apple-music-icon';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: 80px;
  margin-top: 10px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Placeholder = () => {
  return (
    <Wrapper data-testid="apple-music-placeholder">
      <AppleMusicIcon />
    </Wrapper>
  );
};

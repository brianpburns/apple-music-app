import React, { useEffect, useState } from 'react';
import { Label } from 'smart-builder-components';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../types';
import { validateUrl } from '../util';
import { ControlsContainer, Error, Info, StyledCheckbox, StyledInputField } from './styled';

export const Panel = ({ data, dispatch }: ControlPanelProps<DataStructure>) => {
  const { src, compact } = data;
  const [tempSrc, setTempSrc] = useState(src);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const srcError = tempSrc && !validateUrl(tempSrc);

    if (srcError) {
      setErrorMessage(`Oops! That URL doesn't look like a Apple Music song or playlist link.`);
    } else {
      setErrorMessage('');
    }
  }, [tempSrc]);

  const onUrlChange = () => {
    if (errorMessage) return;

    dispatch((api) => {
      api.get('src').set(tempSrc);
    });
  };

  const toggleCompactPlayer = () => {
    dispatch((api) => {
      api.get('compact').set(!compact);
    });
  };

  return (
    <ControlsContainer>
      <Label>Apple Music URL</Label>
      <StyledInputField
        data-testid="apple-music-input"
        value={tempSrc}
        onChange={(e) => setTempSrc(e.currentTarget.value)}
        onBlur={onUrlChange}
        placeholder="https://music.apple.com/us/album/melting-in-a-shallow-body-of-water-single/1616725863"
        hasValue={!!tempSrc}
        type="text"
        minimal
      />
      {errorMessage && <Error>{errorMessage}</Error>}
      <Info>Enter the URL for an Apple Music song, album or playlist</Info>
      <StyledCheckbox label="Compact Player" checked={compact} onClick={toggleCompactPlayer} />
    </ControlsContainer>
  );
};

import React, { useEffect, useState } from 'react';
import { Label } from 'smart-builder-components';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../types';
import { getSongId } from '../util/get-song-id';
import { ControlsContainer, Error, Info, StyledCheckbox, StyledInputField } from './styled';

export const Panel = ({ data, dispatch }: ControlPanelProps<DataStructure>) => {
  const { src, compact } = data;
  const [tempSrc, setTempSrc] = useState(src);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const urlError = tempSrc && !tempSrc.includes('open.spotify.com');
    const videoIdError = tempSrc && !getSongId(tempSrc);

    if (urlError) {
      setErrorMessage(`Oops! That URL doesn't look like a Spotify song or playlist link.`);
    } else if (videoIdError) {
      setErrorMessage(`Oops! That URL doesn't contain a Spotify song or playlist ID.`);
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
      <Label>Spotify URL</Label>
      <StyledInputField
        data-testid="spotify-video-input"
        value={tempSrc}
        onChange={(e) => setTempSrc(e.currentTarget.value)}
        onBlur={onUrlChange}
        placeholder="https://open.spotify.com/track/4IqBIufFMOV1sSYhzIPDoj?si=ee9e5b896e7b47de"
        hasValue={!!tempSrc}
        type="text"
        minimal
      />
      {errorMessage && <Error>{errorMessage}</Error>}
      <Info>Enter the URL for your Spotify song or playlist</Info>
      <Label>Settings</Label>
      <StyledCheckbox label="Compact Player" checked={compact} onClick={toggleCompactPlayer} />
    </ControlsContainer>
  );
};

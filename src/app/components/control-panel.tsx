import React, { useEffect, useState } from 'react';
import { Label } from 'smart-builder-components';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../types';
// import { getVideoId } from '../util/get-video-id';
import { ControlsContainer, Error, Info, StyledCheckbox, StyledInputField } from './styled';

export const Panel = ({ data, dispatch }: ControlPanelProps<DataStructure>) => {
  const { src, autoPlay } = data;
  const [tempSrc, setTempSrc] = useState(src);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const urlError = tempSrc && !tempSrc.includes('promo.com');
    // const videoIdError = tempSrc && !getVideoId(tempSrc);
    const videoIdError = false;

    if (urlError) {
      setErrorMessage(`Oops! That URL doesn't look like a Promo.com video link.`);
    } else if (videoIdError) {
      setErrorMessage(`Oops! That URL doesn't contain a video ID.`);
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

  const toggleAutoPlay = () => {
    dispatch((api) => {
      api.get('autoPlay').set(!autoPlay);
    });
  };

  return (
    <ControlsContainer>
      <Label>Promo.com URL</Label>
      <StyledInputField
        data-testid="promo-video-input"
        value={tempSrc}
        onChange={(e) => setTempSrc(e.currentTarget.value)}
        onBlur={onUrlChange}
        placeholder="https://promo.com/share/623434sdrs4365c758c76bed2"
        hasValue={!!tempSrc}
        type="text"
        minimal
      />
      {errorMessage && <Error>{errorMessage}</Error>}
      <Info>Enter the URL for your Spotify song or playlist</Info>
      <Label>Playback Settings</Label>
      <StyledCheckbox label="Autoplay" checked={autoPlay} onClick={toggleAutoPlay} />
    </ControlsContainer>
  );
};

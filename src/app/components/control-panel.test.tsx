import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../types';
import { Panel } from './control-panel';

const setMock = jest.fn();
const closeMock = jest.fn();
const props = {
  data: {},
  dispatch: (callback: any) => {
    callback({ get: () => ({ set: setMock }) });
  },
} as ComponentProps<DataStructure>;

const renderComponent = () => {
  return render(<Panel closePanel={closeMock} {...props} />);
};

describe('Control Panel Component', () => {
  test('renders content', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('custom-text-align-panel').textContent).toContain('Where do you want that text');
    });
  });

  test('Update alignment', async () => {
    renderComponent();

    fireEvent.click(screen.getByTestId('button-text-align-center'));

    await waitFor(() => {
      expect(setMock).toHaveBeenCalledWith({ textAlign: 'center' });
    });
  });
});

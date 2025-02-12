import type { Preview } from '@storybook/react';

import { ScreenSizeProvider } from '../src/app/providers';

import './preview.css';
import { customViewports } from './viewports';

import '@styles/index.scss';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...customViewports,
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    Story => {
      return (
        <ScreenSizeProvider>
          <Story />
        </ScreenSizeProvider>
      );
    },
  ],
};

export default preview;

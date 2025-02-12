import type { Preview } from '@storybook/react';

import './preview.css';
import { withProviders } from './providers';

import '@styles/index.scss';

const customViewports = {
  xl: {
    name: 'Desktop (xl)',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop',
  },
  lg: {
    name: 'Laptop (lg)',
    styles: {
      width: '1280px',
      height: '800px',
    },
    type: 'desktop',
  },
  md: {
    name: 'Tablet (md)',
    styles: {
      width: '1024px',
      height: '1366px',
    },
    type: 'tablet',
  },
  sm: {
    name: 'Mobile Landscape (sm)',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'mobile',
  },
  xs: {
    name: 'Mobile Portrait (xs)',
    styles: {
      width: '375px',
      height: '812px',
    },
    type: 'mobile',
  },
};

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

    decorators: [withProviders],
  },
};

export default preview;

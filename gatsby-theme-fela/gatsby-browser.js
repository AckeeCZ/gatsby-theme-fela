import React from 'react';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { createRenderer } from 'fela';
import { rehydrate } from 'fela-dom';
import { rendererConfig, staticCSS, fonts } from './src/config';
import { theme } from './src/styles';
import { applyStaticCSS, applyFonts } from './src/utilities';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  const renderer = createRenderer(rendererConfig);

  applyStaticCSS(renderer, staticCSS);
  applyFonts(renderer, fonts);

  rehydrate(renderer);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </RendererProvider>
  );
};

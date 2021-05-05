import React from 'react';
import { renderToString } from 'react-dom/server';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { createRenderer } from 'fela';
import { renderToSheetList } from 'fela-dom';

import { rendererConfig } from './src/config';

import { theme } from './src/styles';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const renderer = createRenderer(rendererConfig);

  const bodyHTML = renderToString(
    // eslint-disable-next-line react/jsx-filename-extension
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{bodyComponent}</ThemeProvider>
    </RendererProvider>,
  );
  const sheetList = renderToSheetList(renderer);

  const elements = sheetList.map(({ type, css, media, support, rehydration }) => (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: css }}
      data-fela-type={type}
      data-fela-support={support}
      data-fela-rehydration={rehydration}
      key={`${type}-${media}`}
      media={media}
    />
  ));
  replaceBodyHTMLString(bodyHTML);
  setHeadComponents(elements);
};

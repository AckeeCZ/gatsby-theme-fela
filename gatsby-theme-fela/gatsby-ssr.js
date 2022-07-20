import React from 'react';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { createRenderer } from 'fela';
import { renderToSheetList } from 'fela-dom';

import { rendererConfig, staticCSS, fonts } from './src/config';
import { theme } from './src/styles';
import { applyStaticCSS, applyFonts } from './src/utilities';

const rendererByPathname = new Map();

// eslint-disable-next-line react/prop-types,react/display-name
export const wrapRootElement = ({ element, pathname }) => {
  const renderer = createRenderer(rendererConfig);

  applyStaticCSS(renderer, staticCSS);
  applyFonts(renderer, fonts);

  rendererByPathname.set(pathname, renderer);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </RendererProvider>
  );
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const renderer = rendererByPathname.get(pathname);
  if (renderer) {
    const sheetList = renderToSheetList(renderer);
    const headElements = sheetList.map(({ type, css, media, support, rehydration }) => (
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

    setHeadComponents(headElements);
    rendererByPathname.delete(pathname);
  }
};

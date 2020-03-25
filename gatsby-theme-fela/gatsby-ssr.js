const React = require('react');
const PropTypes = require('prop-types');
const { renderToString } = require('react-dom/server');
const { renderToSheetList } = require('fela-dom');
const { wrapWithFelaRenderer } = require('./render-helpers');
const { FelaProvider } = require('./src/components');

/* eslint react/prop-types: 0 */
exports.wrapRootElement = ({ element }) => {
  return React.createElement(FelaProvider, null, element);
};

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { renderer, wrapped } = wrapWithFelaRenderer(bodyComponent);

  const bodyHTML = renderToString(wrapped);
  const sheetList = renderToSheetList(renderer);

  const elements = sheetList.map(({ type, css, media, support }) =>
    React.createElement('style', {
      dangerouslySetInnerHTML: {
        __html: css,
      },
      'data-fela-type': type,
      'data-fela-support': support,
      key: `${type}-${media}`,
      media,
    }),
  );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents(elements);
};

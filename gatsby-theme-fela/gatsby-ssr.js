const React = require("react")
const { renderToString } = require("react-dom/server")
const { renderToSheetList } = require("fela-dom")
const { wrapWithFelaRenderer } = require("./render-helpers")
const FelaProvider = require("./src/fela/FelaProvider").default

exports.wrapRootElement = ({ element }) => {
  return <FelaProvider>{element}</FelaProvider>
}

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const { renderer, wrapped } = wrapWithFelaRenderer(bodyComponent)

  const bodyHTML = renderToString(wrapped)
  const sheetList = renderToSheetList(renderer)

  const elements = sheetList.map(({ type, css, media, support }) => (
    <style
      dangerouslySetInnerHTML={{ __html: css }}
      data-fela-type={type}
      data-fela-support={support}
      key={`${type}-${media}`}
      media={media}
    />
  ))

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents(elements)
}

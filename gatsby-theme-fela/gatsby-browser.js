const React = require("react")
const { wrapWithFelaRenderer } = require("./gatsby-api")
const FelaProvider = require("./src/fela/FelaProvider").default

exports.wrapRootElement = ({ element }) => {
  const { wrapped } = wrapWithFelaRenderer(
    <FelaProvider>{element}</FelaProvider>
  )

  return wrapped
}

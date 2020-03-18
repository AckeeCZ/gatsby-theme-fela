const React = require("react")
const { wrapWithFelaRenderer } = require("./render-helpers")
const FelaProvider = require("./src/components/FelaProvider").default

exports.wrapRootElement = ({ element }) => {
  const { wrapped } = wrapWithFelaRenderer(
    <FelaProvider>{element}</FelaProvider>
  )

  return wrapped
}

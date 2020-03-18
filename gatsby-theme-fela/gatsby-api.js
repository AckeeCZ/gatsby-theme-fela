const React = require("react")
const FelaProvider = require("./src/fela/FelaProvider").default

exports.wrapRootElement = ({ element }) => {
  return <FelaProvider>{element}</FelaProvider>
}

const React = require("react")
const FelaProvider = require('./src/components/FelaProvider').default

exports.wrapRootElement = ({ element }) => {
  return <FelaProvider>{element}</FelaProvider>
}

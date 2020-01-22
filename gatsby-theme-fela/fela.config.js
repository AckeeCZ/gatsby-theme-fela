const unitPlugin = require("fela-plugin-unit").default
const namedKeysPlugin = require("fela-plugin-named-keys").default
const monolithic = require("fela-monolithic").default

const defaultUnit = "px"

const namedKeys = {
  // You can use some commonly used keys, eg. breakpoints and then use
  // them in styles definitions, see Header.style for usage example
  min768px: "@media (min-width: 768px)",
}

module.exports = {
  plugins: [unitPlugin(defaultUnit), namedKeysPlugin(namedKeys)],
  devMode: process.env.NODE_ENV !== "production",
  enhancers: [
    process.env.NODE_ENV === 'development' &&
      monolithic({
            prettySelectors: true,
        }),
  ]
}

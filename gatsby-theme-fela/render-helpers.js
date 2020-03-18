const React = require("react")
const { createRenderer } = require("fela")
const { RendererProvider } = require("react-fela")
const Config = require("./src/config")

exports.wrapWithFelaRenderer = element => {
  const renderer = createRenderer(Config.rendererConfig)

  return {
    renderer,
    wrapped: <RendererProvider renderer={renderer}>{element}</RendererProvider>,
  }
}

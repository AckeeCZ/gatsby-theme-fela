const React = require("react")
const { RendererProvider } = require("react-fela")
const { createRenderer } = require("fela")

exports.wrapRootElement = ({ element }) => {
  let config
  try {
    config = require(`./fela.config.js`)
  } catch (e) {
    console.log(e)
  }
  const renderer = createRenderer(config)

  return <RendererProvider renderer={renderer}>{element}</RendererProvider>
}

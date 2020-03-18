import * as Consts from "../constants"

import styles, { theme } from "../styles"
import defaultFonts from "../fonts"

import plugins from "./plugins"
import enhancers from "./enhancers"

export const rendererConfig = {
  devMode: Consts.isEnvDevelopment,
  enhancers,
  plugins,
  theme,
}

export const staticCSS = styles

export const fonts = defaultFonts

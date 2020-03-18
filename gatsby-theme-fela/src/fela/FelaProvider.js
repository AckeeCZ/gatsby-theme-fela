import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, useFela } from "react-fela"

import { theme } from "../styles"

import * as Config from "./config"

import { applyStaticCSS, applyFonts } from "../utilities"

const FelaProvider = ({ children }) => {
  const { renderer } = useFela()

  applyStaticCSS(renderer, Config.staticCSS)
  applyFonts(renderer, Config.fonts)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

FelaProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FelaProvider

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, FelaRenderer } from "react-fela"

import fonts from "../fonts"
import styles, { theme } from "../styles"

const FelaProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <FelaRenderer>
      {renderer => {
        fonts.forEach(font => {
          renderer.renderFont(font.name, font.files, font.options)
        })

        styles.forEach(style => {
          renderer.renderStatic(style.toString())
        })

        return <>{children}</>
      }}
    </FelaRenderer>
  </ThemeProvider>
)

FelaProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FelaProvider

import React from "react"
import PropTypes from "prop-types"
import { FelaComponent } from "react-fela"

import FelaProvider from "./FelaProvider"
import Header from "./Header"
import { wrapper } from "./Layout.style"

const Layout = ({ children }) => {
  return (
    <FelaProvider>
      <Header />
      <FelaComponent style={wrapper}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </FelaComponent>
    </FelaProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

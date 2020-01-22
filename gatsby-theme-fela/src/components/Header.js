import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { connect as connectFela } from "react-fela"

import { header, content, title, link } from "./Header.style"

const Header = ({ siteTitle, styles }) => (
  <header className={styles.header}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  styles: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default connectFela({
  header,
  content,
  title,
  link,
})(Header)

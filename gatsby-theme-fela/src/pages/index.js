import React from "react"
import { Link } from "gatsby"
import { connect as connectFela } from "react-fela"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

export const imageSection = () => ({
  maxWidth: `300px`,
  marginBottom: `1.45rem`,
})

const IndexPage = ({ styles }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default connectFela({ imageSection })(IndexPage)

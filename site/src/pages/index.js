import React from "react"
import Layout from "../components/Layout"
import { connect as connectFela } from "react-fela"

export const content = () => ({
  marginTop: '1.25rem',
})

const IndexPage = ({ styles }) => {
  return (
    <Layout>
      <p className={styles.content}>Homepage fela paragraph</p>
    </Layout>
  )
}

export default connectFela({content}) (IndexPage);
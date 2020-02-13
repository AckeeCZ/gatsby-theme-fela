import React from "react"
import Layout from "../components/Layout"
import { connect as connectFela } from "react-fela"

export const content = () => ({
  marginTop: '1.25rem',
})

export const bold = () => ({
  fontWeight: '700'
})

export const italic = () => ({
  fontStyle: 'italic'
})

export const boldItalic = () => ({
  fontStyle: 'italic',
  fontWeight: '700'
})

const IndexPage = ({ styles }) => {
  return (
    <Layout>
      <p className={styles.content}>Homepage fela paragraph</p>
      <p className={styles.bold}>With</p>
      <p className={styles.italic}>Custom</p>
      <p className={styles.boldItalic}>Fonts</p>
      <span class='custom-static custom-class-1'>And</span>
      <span class='custom-static custom-class-2'>Custom</span>
      <span class='custom-static custom-class-3'>Static CSS</span>
    </Layout>
  )
}

export default connectFela({bold, content, italic, boldItalic}) (IndexPage);
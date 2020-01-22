export const header = ({ theme }) => ({
  background: "black",
  marginBottom: `1.45rem`,

  min768px: {
    background: theme.colors.primary,
  },
})

export const content = () => ({
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
})

export const title = () => ({ margin: 0 })

export const link = () => ({
  color: `white`,
  textDecoration: `none`,
})

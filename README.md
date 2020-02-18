# gatsby-theme-fela
This is a Gatsby theme to extend your awesome website with Fela.

Read more about Gatsby themes: https://www.gatsbyjs.org/docs/themes/

Readmore about Fela: https://fela.js.org/

## Gatsby-theme-fela
Behaves like a node_module for now its implemented using workspaces.
This theme lets you use Fela out of the box, without having to worry about implementation details.

All you have to do is to include it in your core **gatsby-config.js**

```javascript
module.exports = {
  plugins: [
    'gatsby-theme-fela',
  ],
}
```

And your core workspace **package.json** file

```javascript
"dependencies": {
    "gatsby": "^2.18.22",
    "gatsby-theme-fela": "*",
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
}
```

You can see example implementation in the **site** folder

## Site
Site is the example of your core workspace, that could be extended by themes

## Running the project 
`yarn workspace site`

when all packages are installed then

`yarn workspace site develop`

For more available commands, check scripts field in **package.json**
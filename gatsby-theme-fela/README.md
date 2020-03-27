
Gatsby Theme Fela
======

This is a Gatsby theme to extend your awesome website with Fela.

Read more about Gatsby themes: https://www.gatsbyjs.org/docs/themes/

Read more about Fela: https://fela.js.org/

## Theme

This theme lets you use Fela out of the box, without having to worry about implementation details.

All you have to do is to include it in your core **gatsby-config.js**

## Install

```shell
yarn add gatsby-theme-fela
```

```javascript
// gatsby-config.js
module.exports = {
  plugins: ['gatsby-theme-fela'],
};
```

## Overriding and customisation 

You can override the default fela settings, theme etc. by using theme shadowing.

Learn more about shadowing here: https://www.gatsbyjs.org/docs/themes/shadowing/

Especially fonts and style are most likely to be overriden while customising your theme. 

### Adding custom static styles

Lets say you want to add custom styles file `layout.css`

1. Create a following folders in your project `src/gatsby-them-fela/styles` 
2. Inside that folder create file `index.js`
```javascript
    // src/gatsby-them-fela/styles/index.js
    import layout from "!css-loader!./layout.css"

    // you can include multiple files and include them in this array
    export default [layout]
```
3. gatsby-theme-fela will solve the rest for you

### Adding custom fonts

Adding fonts works the same way as adding styles.

1. Create a following folders in your project `src/gatsby-them-fela/fonts` 
2. Inside that folder create file `index.js`
```javascript
    // src/gatsby-them-fela/fonts/namedKeys.js
    import SpaceMono from "./SpaceMono-Regular.ttf"

    // you can include multiple fonts and include them in this array
    export default [
        {
            name: "SpaceMono",
            files: [SpaceMono],
            options: {
            fontStyle: "normal",
            fontWeight: "400",
            fontDisplay: "swap",
            },
        },
    ]
```
3. gatsby-theme-fela will solve the rest for you


### Adding custom named keys

Custom named keys allows you to write more readable code, by defining key names for media querries. 

You can write your own keys following these steps: 

1. Create a following folders in your project `src/gatsby-them-fela/config` 
2. Inside that folder create file `namedKey.js`

Setup:

```javascript
    // namedKeys.js
    const namedKeys = {
        desktopFullHD: '@media (min-width: 1920px)',
        desktopLarge: '@media (min-width: 1440px)',
        desktop: '@media (min-width: 1024px)',

        tablet: '@media (min-width: 768px)',
        tabletMax: '@media (max-width: 1023px)',
    };

    export default namedKeys;
```

Usage: 

```javascript
    export const container = () => {
        return {
            display: block,

            // @media (min-width: 1920px)
            desktopFullHD: {
                display: 'flex',
            },
        };
    };
```


## Basic usage

There are many ways of using fela, you can read more about them [here](https://fela.js.org/docs/guides/UsageWithReact.html)

Here in [Ackee](https://github.com/AckeeCZ) prefer this way: 

Say you want to style a Header with Fela. 

```javascript
    // components/Header/index.js
    import { connect as connectFela } from "react-fela"
    import Header from './Header';
    import * as styles from './Header.styles';

    export default connectFela(styles)(Header);
```

```javascript
    // components/Header/Header.jsx
    const Header = ({styles}) => (
        <h1 class={styles.header}>Hello World!</h1>
    )
```


```javascript
    // components/Header/Header.styles.js
    export const header = () => ({
        color: 'tomato'
    });
```

```javascript
    // anywhere in your app

    import Header from 'components/Header'

    const someComponent = () => (
        <Header>
    )
```
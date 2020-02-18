import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, RendererProvider } from "react-fela"

import { theme } from "../styles"

import * as Config from './config';

import { createRenderer } from 'fela';

import { applyStaticCSS, applyFonts } from '../utilities';

class FelaProvider extends PureComponent {
  static propTypes = {
      children: PropTypes.node.isRequired,
  };

  constructor(props) {
      super(props);

      this.renderer = createRenderer(Config.rendererConfig);
  }

  componentDidMount() {
      applyStaticCSS(this.renderer, Config.staticCSS);
      applyFonts(this.renderer, Config.fonts);
  }

  comopnentWillUnmount() {
      this.renderer.clear();
  }

  render() {
      const { children } = this.props;

      return (
          <RendererProvider renderer={this.renderer}>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </RendererProvider>
      );
  }
}


export default FelaProvider

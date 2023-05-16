import felaPluginValidator from 'fela-plugin-validator';
import felaPluginUnit from 'fela-plugin-unit';
import felaPluginNamedKeys from 'fela-plugin-named-keys';
import felaPluginFriendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import felaPluginExpandShorthand from 'fela-plugin-expand-shorthand';
import felaPluginEmbedded from 'fela-plugin-embedded';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';

import namedKeys from './namedKeys';

const defaultUnit = 'px';

const plugins = [
  // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-unit
  felaPluginUnit(defaultUnit),

  // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
  felaPluginFriendlyPseudoClass(),

  // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
  felaPluginNamedKeys(namedKeys),

  felaPluginExpandShorthand(true),

  // docs: https://github.com/robinweser/fela/tree/master/packages/fela-plugin-embedded
  felaPluginEmbedded(),

  prefixer(),

  fallbackValue(),

  // felaPluginValidator should be the last plugin
  process.env.NODE_ENV === 'development' &&
    felaPluginValidator({
      logInvalid: true,
      deleteInvalid: true,
      useCSSLint: false,
    }),
].filter(Boolean);

export default plugins;

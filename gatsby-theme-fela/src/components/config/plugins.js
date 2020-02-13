import {
    felaPluginValidator,
    felaPluginUnit,
    felaPluginNamedKeys,
    felaPluginFriendlyPseudoClass,
    felaPluginExpandShorthand,
} from '../dependencies';

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

    // felaPluginValidator should be the last plugin
    process.env.NODE_ENV === 'development' &&
        felaPluginValidator({
            logInvalid: true,
            deleteInvalid: true,
            useCSSLint: false,
        }),
].filter(Boolean);

export default plugins;

import { Consts, theme } from '../dependencies';

import resets from '../../styles/resets.css'
import defaultFonts  from '../../fonts'

import plugins from './plugins';
import enhancers from './enhancers';

export const rendererConfig = {
    devMode: Consts.isEnvDevelopment,
    enhancers,
    plugins,
    theme,
};

export const staticCSS = [resets];

export const fonts = defaultFonts

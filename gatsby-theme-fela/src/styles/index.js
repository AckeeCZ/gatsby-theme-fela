/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved*/
import layout from '!css-loader!./layout.css';
import resets from '!css-loader!./resets.css';
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved*/

export { default as theme } from './theme';

export default [layout, resets];

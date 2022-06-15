/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved*/
import layout from '!css-loader!./layout.css';
import customStaticStyles from '!css-loader!./customStaticStyles.css';
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved*/

export { default as theme } from './theme';

const styles = [layout, customStaticStyles]

export default styles;

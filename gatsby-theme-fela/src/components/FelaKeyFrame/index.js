import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { RendererContext, ThemeContext } from 'react-fela';

function FelaKeyframe({ children, keyframe, ...props }) {
    const renderer = useContext(RendererContext);
    const theme = useContext(ThemeContext);
    // eslint-disable-next-line
    const animationName = React.useMemo(() => renderer.renderKeyframe(keyframe, { ...props, theme }), [
        keyframe,
        renderer,
        theme,
    ]);
    return children(animationName);
}

FelaKeyframe.propTypes = {
    children: PropTypes.func.isRequired,
    keyframe: PropTypes.func.isRequired,
};

export default FelaKeyframe;

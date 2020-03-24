import React from 'react';
import PropTypes from 'prop-types';
import { useFela } from 'react-fela';

function FelaKeyframe({ children, keyframe, ...props }) {
  const { renderer, theme } = useFela();
  const animationName = React.useMemo(() => renderer.renderKeyframe(keyframe, { ...props, theme }), [
    keyframe,
    renderer,
    theme,
    props,
  ]);
  return children(animationName);
}

FelaKeyframe.propTypes = {
  children: PropTypes.func.isRequired,
  keyframe: PropTypes.func.isRequired,
};

export default FelaKeyframe;

/**
 * Contains all compount proptypes
 */
import PropTypes from 'prop-types';

export const IStyle = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.number),
]);

export const IChildren = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
]);

export const INavigate = PropTypes.shape({
  navigate: PropTypes.func,
  goBack: PropTypes.func,
  isFocused: PropTypes.func,
  addListener: PropTypes.func,
  state: PropTypes.object,
  setParams: PropTypes.func,
  getParam: PropTypes.func,
  dispatch: PropTypes.func,
});

export const IImageSource = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
]).isRequired;

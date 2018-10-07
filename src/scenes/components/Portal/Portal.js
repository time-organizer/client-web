import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => ReactDOM.createPortal(
  children,
  document.querySelector('body'), // eslint-disable-line
);

Portal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
Portal.defaultProps = {};

export default Portal;

import React from 'react';
import c from 'classnames';

import PropTypes from 'prop-types';

const WidgetsChooserListItem = ({ onClick, name, active }) => (
  <div
    onClick={onClick}
    className={c('widgets-chooser-list-item', { active })}
  >
    {name}
  </div>
);

WidgetsChooserListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
WidgetsChooserListItem.defaultProps = {};

export default WidgetsChooserListItem;

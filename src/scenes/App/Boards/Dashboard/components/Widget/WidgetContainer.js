import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchWidgetDataIfNeeded } from '../Widgets/actions';
import Widget from './Widget';

class WidgetContainer extends Component {
  componentDidMount() {
    const { onFetchWidgetData, widgetKey } = this.props;

    onFetchWidgetData(widgetKey);
  }

  render() {
    const { children, name, editMode } = this.props;

    return (
      <Widget
        name={name}
        editMode={editMode}
      >
        {children}
      </Widget>
    );
  }
}

WidgetContainer.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  name: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  onFetchWidgetData: PropTypes.func.isRequired,
  widgetKey: PropTypes.string.isRequired,
};
WidgetContainer.defaultProps = {};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onFetchWidgetData: () => dispatch(fetchWidgetDataIfNeeded(ownProps.widgetKey)),
  };
}

export default connect(null, mapDispatchToProps)(WidgetContainer);

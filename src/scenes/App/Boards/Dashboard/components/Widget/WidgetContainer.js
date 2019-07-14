import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import { fetchWidgetDataIfNeeded } from '../Widgets/actions';
import Widget from './Widget';
import { widgetNames } from '../Widgets/utilities/config';
import WidgetError from './components/WidgetError';
import WidgetLoader from './components/WidgetLoader';

class WidgetContainer extends Component {
  componentDidMount() {
    const { onFetchWidgetData } = this.props;
    const { match: { params } } = this.props;

    onFetchWidgetData(params.id);
  }

  render() {
    const {
      WidgetComponent, editMode, widgetKey, isFetching, data, error,
    } = this.props;

    return (
      <Widget
        name={widgetNames[widgetKey]}
        editMode={editMode}
      >
        {isFetching && (
          <WidgetLoader />
        )}
        {!isFetching && error && (
          <WidgetError />
        )}
        {!isFetching && !error && data && (
          <WidgetComponent data={data} />
        )}
      </Widget>
    );
  }
}

WidgetContainer.propTypes = {
  WidgetComponent: PropTypes.element.isRequired,
  editMode: PropTypes.bool.isRequired,
  onFetchWidgetData: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  widgetKey: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.shape(),
  error: PropTypes.string,
};
WidgetContainer.defaultProps = {
  error: '',
  data: null,
};

function mapStateToProps(state, props) {
  const { widgetKey } = props;
  const widget = get(state, `boards.workspace.widgets[${widgetKey}]`, {});
  const { isFetching, data, error } = widget;

  return {
    isFetching,
    data,
    error,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onFetchWidgetData: boardId => dispatch(fetchWidgetDataIfNeeded(ownProps.widgetKey, boardId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WidgetContainer));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './Dashboard';
import { fetchBoardIfNeeded } from '../Workspace/actions';
import { BoardModel } from '../../../../models/Board';
import { toggleWidgetsChooser } from '../../../generalActions';
import getDashboardLayouts from './utilities/getDashboardLayouts';
import setDashboardLayouts from './utilities/setDashboardLayouts';
import getActiveWidgets from './utilities/getActiveWidgets';
import setActiveWidgets from './utilities/setActiveWidgets';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      layoutsConfig: getDashboardLayouts(),
      activeWidgets: getActiveWidgets(),
    };
  }

  componentDidMount() {
    const { refreshBoard, match: { params } } = this.props;

    refreshBoard(params.id);
  }

  toggleEditMode = () => this.setState(prevState => ({ editMode: !prevState.editMode }));

  editLayoutsConfig = (newLayouts, allNewLayouts) => {
    this.setState({ layoutsConfig: allNewLayouts });
    setDashboardLayouts(allNewLayouts);
  };

  toggleWidget = (widgetkey) => {
    const { activeWidgets } = this.state;
    let newActiveWidgets;

    if (activeWidgets.indexOf(widgetkey) > -1) {
      newActiveWidgets = activeWidgets.filter(activeWidgetKey => activeWidgetKey !== widgetkey);
    } else {
      newActiveWidgets = [
        ...activeWidgets,
        widgetkey,
      ];
    }

    this.setState({ activeWidgets: newActiveWidgets });
    setActiveWidgets(newActiveWidgets);
  };

  render() {
    const { editMode, layoutsConfig, activeWidgets } = this.state;
    const { boardData, onToggleWidgetsChooser, widgetsChooserOpened } = this.props;

    return boardData && (
      <Dashboard
        onToggleWidgetsChooser={onToggleWidgetsChooser}
        widgetsChooserOpened={widgetsChooserOpened}
        toggleEditMode={this.toggleEditMode}
        editMode={editMode}
        layoutsConfig={layoutsConfig}
        editLayoutsConfig={this.editLayoutsConfig}
        activeWidgets={activeWidgets}
        toggleWidget={this.toggleWidget}
      />
    );
  }
}

DashboardContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  boardData: BoardModel,
  refreshBoard: PropTypes.func.isRequired,
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  widgetsChooserOpened: PropTypes.bool.isRequired,
};
DashboardContainer.defaultProps = {
  boardData: null,
};

function mapStateToProps({
  boards: { workspace: { board } },
  general: { widgetsChooserOpened },
}) {
  const boardData = board.data;

  return {
    board,
    boardData,
    widgetsChooserOpened,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshBoard: id => dispatch(fetchBoardIfNeeded(id)),
    onToggleWidgetsChooser: () => dispatch(toggleWidgetsChooser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

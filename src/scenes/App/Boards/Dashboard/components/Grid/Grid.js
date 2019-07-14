import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import c from 'classnames';

import { breakPoints, columnsNumber } from '../../utilities/config';

import Widget from '../Widget';
import './Grid.css';
import { WidgetsComponents } from '../Widgets/utilities/config';

const ResponsiveGridLayout = WidthProvider(Responsive);


class Grid extends Component {
  getEditableProps = () => {
    const { editMode } = this.props;

    const editable = {
      isDraggable: true,
      isResizable: true,
    };

    const notEditable = {
      isDraggable: false,
      isResizable: false,
    };

    return editMode ? editable : notEditable;
  };

  render() {
    const {
      editMode, layoutsConfig, editLayoutsConfig, activeWidgets,
    } = this.props;

    return (
      <ResponsiveGridLayout
        className={c('grid', { 'edit-mode': editMode })}
        layouts={layoutsConfig}
        {...this.getEditableProps()}
        breakpoints={breakPoints}
        cols={columnsNumber}
        onLayoutChange={editLayoutsConfig}
      >
        {activeWidgets.map((widgetKey) => {
          const WidgetComponent = WidgetsComponents[widgetKey];

          return (
            <div key={widgetKey}>
              <Widget
                widgetKey={widgetKey}
                editMode={editMode}
                WidgetComponent={WidgetComponent}
              />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    );
  }
}

Grid.propTypes = {
  editMode: PropTypes.bool.isRequired,
  layoutsConfig: PropTypes.shape().isRequired,
  editLayoutsConfig: PropTypes.func.isRequired,
  activeWidgets: PropTypes.arrayOf(PropTypes.string),
};
Grid.defaultProps = {
  activeWidgets: [],
};

export default Grid;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import c from 'classnames';

import { breakPoints, columnsNumber, defaultDashboardLayouts } from '../../utilities/config';

import Widget from '../Widget/Widget';
import './Grid.css';

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
    const { editMode } = this.props;

    return (
      <ResponsiveGridLayout
        className={c('grid', { 'edit-mode': editMode })}
        layouts={defaultDashboardLayouts}
        {...this.getEditableProps()}
        breakpoints={breakPoints}
        cols={columnsNumber}
      >
        {['a', 'b', 'c'].map(widgetKey => (
          <div key={widgetKey}>
            <Widget name="TTestt" editMode={editMode} />
          </div>
        ))}
      </ResponsiveGridLayout>
    );
  }
}

Grid.propTypes = {
  editMode: PropTypes.bool.isRequired,
};
Grid.defaultProps = {};

export default Grid;

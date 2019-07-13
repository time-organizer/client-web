import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';

import { defaultDashboardLayout } from '../../utilities/config';

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
    return (
      <ResponsiveGridLayout
        className="layout"
        layout={defaultDashboardLayout}
        {...this.getEditableProps()}
        breakpoints={{
          lg: 640,
        }}
        cols={{
          lg: 12,
        }}
      >
        <div key="a">
          <Widget name="TTestt" />
        </div>
        <div key="b">
          <Widget name="TTestt" />
        </div>
        <div key="c">
          <Widget name="TTestt" />
        </div>
      </ResponsiveGridLayout>
    );
  }
}

Grid.propTypes = {
  editMode: PropTypes.bool.isRequired,
};
Grid.defaultProps = {};

export default Grid;

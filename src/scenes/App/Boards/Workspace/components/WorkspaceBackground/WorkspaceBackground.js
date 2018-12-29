import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import find from 'lodash/find';

import boardThemes from '../../../utilities/boardThemes';

import './WorkspaceBackground.css';

class WorkspaceBackground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false,
    };

    this.imgLoader = React.createRef();
  }

  componentDidMount() {
    this.imgLoader.current.addEventListener('load', this.onLoad);
  }

  componentWillUnmount() {
    this.imgLoader.current.removeEventListener('load', this.onLoad);
  }

  onLoad = () => this.setState({ imageLoaded: true });

  render() {
    const { children, themeId } = this.props;
    const { imageLoaded } = this.state;
    const theme = find(boardThemes, boardTheme => boardTheme.key === themeId);
    const backgroundImage = imageLoaded ? theme.bgHd : theme.bgThumb;

    return (
      <Fragment>
        <div
          className={c('workspace-background', { blurred: !imageLoaded })}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="workspace-background-content">
          {children}
        </div>
        <img
          className="workspace-background-img-loader"
          src={theme.bgHd}
          alt="background"
          ref={this.imgLoader}
        />
      </Fragment>
    );
  }
}

WorkspaceBackground.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  themeId: PropTypes.number.isRequired,
};
WorkspaceBackground.defaultProps = {
  children: null,
};

export default WorkspaceBackground;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import boardThemes from '../../../../utilities/boardThemes';

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
    const { children } = this.props;
    const { imageLoaded } = this.state;
    const theme = boardThemes[6];
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
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
WorkspaceBackground.defaultProps = {
  children: null,
};

export default WorkspaceBackground;

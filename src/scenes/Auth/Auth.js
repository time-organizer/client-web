import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './Login';
import SignUp from './SignUp';

class Auth extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/sign-up" component={SignUp}/>
                </Switch>
            </div>
        );
    }
}

Auth.propTypes = {};
Auth.defaultProps = {};

export default Auth;

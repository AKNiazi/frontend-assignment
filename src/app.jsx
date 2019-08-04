import React from 'react';
import { Route, Switch } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import * as actions from './actions/actions';
import { HeaderContainer } from './common/header';

import { routes } from './pages/routes';

import './app.css';

const propTypes = {
  alertType: PropTypes.string,
  showAlert: PropTypes.bool,
  actions: PropTypes.object,
}

class App extends React.PureComponent {

  componentDidMount() {
    this.props.actions.getCurrencies();
  }
  
  handleAlertDismiss = () => {
    this.props.actions.hideErrorAlert();
  };
  
  errorAlert() {
    let message = this.props.alertMessage;
    message = typeof(message) === 'object' && message ? JSON.stringify(message) : message;
    return (
      <Alert
        color={this.props.alertType}
        className="mt-20"
        toggle={this.handleAlertDismiss}
        isOpen={this.props.showAlert}
      >
        {message}
      </Alert>
    );
  }

  render() {
    return (
      <div className="container">
        <HeaderContainer />
        {this.errorAlert()}
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

App.propTypes = propTypes;


const mapStateToProps = state => ({
  alertType: state.alertType,
  alertMessage: state.alertMessage,
  showAlert: state.showAlert,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

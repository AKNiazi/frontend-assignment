import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { AppContainer } from './app';
import { HashRouter } from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

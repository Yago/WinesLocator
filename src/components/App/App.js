import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Navigator } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';

import { getData, getGrapes } from '../../actions/api';

import Home from '../../views/Home/Home';

class App extends Component {
  componentDidMount() {
    this.props.getData();
    this.props.getGrapes();
  }

  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator
        key='nav'
        swipeable
        initialRoute={{ component: Home, props: { key: 'homepage' } }}
        renderPage={this.renderPage}
      />
    );
  }
}

function mapState(state) {
  return {
    api: state.api,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({
    getData,
    getGrapes,
  }, dispatch);
}

export default connect(mapState, mapDispatch)(App);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List } from 'react-onsenui';

import { getData } from '../../actions/api';

import Item from '../../components/Item/Item';
import Header from '../../components/Header/Header';

class Details extends Component {
  pushPage() {
    this.props.navigator.pushPage({
      component: Details,
      props: { key: 'details' }
    });
  }

  render() {
    return (
      <Page>
        <Header title="Details" back={true} />
        <p><br /><br /><br /><br /><br /><br />Details here</p>
      </Page>
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
  }, dispatch);
}

export default connect(mapState, mapDispatch)(Details);

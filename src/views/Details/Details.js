import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List } from 'react-onsenui';

import { getData } from '../../actions/api';

import Item from '../../components/Item/Item';
import Header from '../../components/Header/Header';

class Details extends Component {
  pushPage(item, navigator) {
    navigator.pushPage({
      component: Details,
      props: {
        key: item.id,
        item
      }
    });
  }

  render() {
    return (
      <Page renderToolbar={() => (<Header title={this.props.item.fields.name} back={true} />)}>
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

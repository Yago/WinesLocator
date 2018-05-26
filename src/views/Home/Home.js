import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List } from 'react-onsenui';

import { getData } from '../../actions/api';

import Item from '../../components/Item/Item';
import Header from '../../components/Header/Header';

import Details from '../Details/Details';

class Home extends Component {
  pushPage() {
    this.props.navigator.pushPage({
      component: Details,
      props: { key: 'details' }
    });
  }

  render() {
    return (
      <Page>
        <Header title="Homepage" back={false} />
        <List>
          {this.props.api.data.map((item, i) =>
            <Item
              key={i}
              data={item}
              navigator={this.props.navigator}
              handleClick={this.pushPage.bind(this)}
            />
          )}
        </List>
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

export default connect(mapState, mapDispatch)(Home);

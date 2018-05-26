import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List } from 'react-onsenui';

import { getData } from '../../actions/api';

import Item from '../../components/Item/Item';
import Header from '../../components/Header/Header';

import Details from '../Details/Details';

class Home extends Component {
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
      <Page renderToolbar={() => (<Header title="Homepage" back={false} />)}>
        <List>
          {this.props.api.data.map((item, i) =>
            <Item
              key={i}
              data={item}
              navigator={this.props.navigator}
              handleClick={this.pushPage}
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

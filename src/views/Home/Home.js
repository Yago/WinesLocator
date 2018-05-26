import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List } from 'react-onsenui';

import Item from '../../components/Item/Item';
import Header from '../../components/Header/Header';

import Details from '../Details/Details';

class Home extends Component {
  // Trigger redirection to test
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.api && this.props.api.data && this.props.api.data.length > 0) {
  //     setTimeout(() => {
  //       this.pushPage(
  //         this.props.api.data.filter(item => !item.fields.parent)[6],
  //         this.props.navigator
  //       )
  //     }, 500);
  //   }
  // }

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
      <Page renderToolbar={() => (<Header title="🍷 WinesLocator" back={false} />)}>
        <List>
          {this.props.api.data
            .filter(item => !item.fields.parent)
            .map((item, i) =>
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
    
  }, dispatch);
}

export default connect(mapState, mapDispatch)(Home);

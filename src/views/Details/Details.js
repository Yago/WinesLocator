import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List } from 'react-onsenui';

import Item from '../../components/Item/Item';
import Grapes from '../../components/Grapes/Grapes';
import Header from '../../components/Header/Header';

class Details extends Component {
  pushPage(item, navigator) {
    navigator.pushPage({
      component: connect(mapState, mapDispatch)(Details),
      props: {
        ...this.props,
        key: item.id,
        item,
      }
    });
  }

  render() {
    return (
      <Page renderToolbar={() => (<Header title={this.props.item.fields.name} back={true} />)}>
        {this.props.api
          ? <Grapes vineyard={this.props.item.id} />
          : ''
        }
        <List>
          {this.props.api ? this.props.api.data
            .filter((item) => {
              return item.fields.parent && item.fields.parent[0] === this.props.item.id;
            })
            .map((item, i) =>
              <Item
                key={i}
                data={item}
                navigator={this.props.navigator}
                handleClick={this.pushPage}
              />
          ): ''}
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

export default connect(mapState, mapDispatch)(Details);

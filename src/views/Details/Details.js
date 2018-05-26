import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List, Card } from 'react-onsenui';

import Header from '../../components/Header/Header';
import Item from '../../components/Item/Item';
import Grapes from '../../components/Grapes/Grapes';
import Gallery from '../../components/Gallery/Gallery';

class Details extends Component {
  state = {
    galleryVisible: false
  }

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

  onEnter() {
    this.setState({ galleryVisible: true });
  }

  onLeave() {
    this.setState({ galleryVisible: false });
  }

  render() {
    return (
      <Page
        renderToolbar={() => (<Header title={this.props.item.fields.name}
        back={true} />)}
        onShow={this.onEnter.bind(this)}
        onHide={this.onLeave.bind(this)}
      >
        <Card style={{ marginTop: '15px' }}>Type : {this.props.item.fields.designation}</Card>
        
        {this.state.galleryVisible
          ? <Gallery images={this.props.item.fields.maps} />
          : ''
        }

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

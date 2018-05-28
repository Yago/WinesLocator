import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List, ListHeader, Card } from 'react-onsenui';

import Header from '../../components/Header/Header';
import Item from '../../components/Item/Item';
import Grapes from '../../components/Grapes/Grapes';
import Gallery from '../../components/Gallery/Gallery';

import Grape from '../Grape/Grape';

class Details extends Component {
  state = {
    galleryVisible: false
  }

  pushPage(item, navigator) {
    console.log(item.fields.maps);
    navigator.pushPage({
      component: item.fields.maps ? connect(mapState, mapDispatch)(Details) : Grape,
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
    const galleryHeight = `${Math.ceil(this.props.item.fields.maps.length / 3, 10) * 120}px`;

    return (
      <Page
        renderToolbar={() => (<Header title={`${this.props.item.fields.flag || '📍'} ${this.props.item.fields.name}`}
        back={true} />)}
        onShow={this.onEnter.bind(this)}
        onHide={this.onLeave.bind(this)}
      >
        <Card style={{ marginTop: '15px' }}>Type : <b>{this.props.item.fields.designation}</b></Card>
        
        <div style={{ height: galleryHeight }}>
        {this.state.galleryVisible
          ? <Gallery images={this.props.item.fields.maps} />
          : ''
        }
        </div>

        {this.props.api
          ? <Grapes
              vineyard={this.props.item.id}
              navigator={this.props.navigator}
              handleClick={this.pushPage} />
          : ''
        }

        <List modifier="inset">
          {this.props.api ? this.props.api.data
            .filter((item) => {
              return item.fields.parent && item.fields.parent[0] === this.props.item.id;
            })
            .map((item, i) =>
              <div>
                {i === 0
                  ? <ListHeader>Régions :</ListHeader>
                  : ''
                }
                <Item
                  key={i}
                  data={item}
                  navigator={this.props.navigator}
                  handleClick={this.pushPage}
                />
              </div>
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

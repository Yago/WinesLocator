import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page, List, ListHeader, Card } from 'react-onsenui';

import Header from '../../components/Header/Header';

class Grape extends Component {
  render() {
    return (
      <Page
        renderToolbar={() => (<Header title={`🍇 ${this.props.item.fields.name}`}
        back={true} />)}
      >
        <Card>{this.props.item.fields.desc}</Card>
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

export default connect(mapState, mapDispatch)(Grape);

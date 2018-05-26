import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import { getData } from '../../actions/api';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  Item = ({ data }) => {
    return (
      <div>
        {data.name}
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        <h1>Yo</h1>
        {this.props.api.data.map((item, i) =>
          <this.Item key={i} data={item.fields}/>
        )}
      </div>
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

export default connect(mapState, mapDispatch)(App);

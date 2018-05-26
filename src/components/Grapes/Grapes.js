import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, Icon } from 'react-onsenui';

class Grapes extends Component {
  Item({ data }) {
    let color = data.fields.type === 'white' ? '#DFDA85' : '#8A8A8A';
    color = data.fields.type === 'red' ? '#B2143F' : color;

    return (
      <ListItem>
        <div className="left">
          <Icon
            icon="fa-circle"
            className="list-item__icon"
            style={{ color }}
          ></Icon>
        </div>
        <div className='center'>
          {data.fields.name}
        </div>
      </ListItem>
    )
  }

  render() {
    const hasGrapes = this.props.api && this.props.api.grapes.reduce((acc, val) => {
      acc.push(val.fields.vineyards && val.fields.vineyards.includes(this.props.vineyard));
      return acc;
    }, []).includes(true);

    if (!hasGrapes) return '';

    return (
      <div style={{ padding: '15px 0' }}>
        <h4 style={{ padding: '0 15px' }}>Cépages :</h4>
        <List modifier="inset">
          {this.props.api 
            ? this.props.api.grapes
                .filter((item) => {
                  return item.fields.vineyards && item.fields.vineyards.includes(this.props.vineyard);
                })
                .map((item, i) => <this.Item key={i} data={item} />)
            : ''}
        </List>
      </div>
    )
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

export default connect(mapState, mapDispatch)(Grapes);
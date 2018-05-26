import React, { Component } from 'react';
import { ListItem } from 'react-onsenui';

class Item extends Component {
  render() { 
    return (
      <ListItem
        modifier="chevron"
        tappable
        onClick={this.props.handleClick.bind(
          this,
          this.props.data,
          this.props.navigator,
        )}
      >
        <div className='center'>
          {this.props.data.fields.name}
        </div>
      </ListItem>
    )
  }
}
 
export default Item;
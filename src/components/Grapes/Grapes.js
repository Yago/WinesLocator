import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, ListHeader, Icon } from 'react-onsenui';

class Grapes extends Component {
  render() {
    const hasGrapes = this.props.api && this.props.api.grapes.reduce((acc, val) => {
      acc.push(val.fields.vineyards && val.fields.vineyards.includes(this.props.vineyard));
      return acc;
    }, []).includes(true);

    if (!hasGrapes) return '';

    return (
      <div style={{ padding: '15px 0' }}>
        <List modifier="inset">
          <ListHeader>Cépages :</ListHeader>
          {this.props.api 
            ? this.props.api.grapes
                .filter((item) => {
                  return item.fields.vineyards && item.fields.vineyards.includes(this.props.vineyard);
                })
                .map((item, i) => {
                  let color = item.fields.type === 'white' ? '#DFDA85' : '#8A8A8A';
                  color = item.fields.type === 'red' ? '#B2143F' : color;

                  return (
                    <ListItem
                      modifier="chevron"
                      tappable
                      onClick={this.props.handleClick.bind(
                        this,
                        item,
                        this.props.navigator,
                      )}
                    >
                      <div className="left">
                        <Icon
                          icon="fa-circle"
                          className="list-item__icon"
                          style={{ color }}
                        ></Icon>
                      </div>
                      <div className='center'>
                        {item.fields.name}
                      </div>
                    </ListItem>
                  )
                })
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
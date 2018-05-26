import React, { Component } from 'react';
import { Toolbar, BackButton } from 'react-onsenui';

class Header extends Component {
  state = {}
  render() {
    const backButton = this.props.back
      ? <BackButton>Back</BackButton>
      : null;

    return (
      <Toolbar>
        <div className='left'>{backButton}</div>
        <div className='center'>{this.props.title}</div>
      </Toolbar>
    )
  }
}
 
export default Header;
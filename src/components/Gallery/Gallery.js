import React, { Component } from 'react';

import { PhotoSwipeGallery } from 'react-photoswipe-component'
import "photoswipe/dist/photoswipe.css"
import "photoswipe/dist/default-skin/default-skin.css"
import "react-photoswipe-component/src/style.css"

import './Gallery.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: this.props.images.map((image) => ({
        src: image.url,
        w: image.thumbnails.large.width * 8,
        h: image.thumbnails.large.height * 8,
      }))
    };
  }
  
  render() {
    return (
      <PhotoSwipeGallery items={this.state.container} />
    )
  }
}
 
export default Item;
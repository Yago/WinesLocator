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
      container: this.props.images.reverse().map((image) => {
        const hasThumb = image.thumbnails !== undefined && image.thumbnails.large !== undefined;

        return {
          src: image.url,
          w: hasThumb ? image.thumbnails.large.width * 8 : 2000,
          h: hasThumb ? image.thumbnails.large.height * 8 : 2000,
        }
      })
    };
  }
  
  render() {
    return (<PhotoSwipeGallery items={this.state.container} />);
  }
}
 
export default Item;
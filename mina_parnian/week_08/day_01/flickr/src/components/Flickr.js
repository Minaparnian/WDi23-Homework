import React, {Component} from 'react';

class FlickrForm extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState( { query: e.target.value} );
    console.log(this.state);
  }


  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    console.log("submit");
  }

  render(){
    return (
     <form onSubmit={this._handleSubmit}>
     <input type="search" placeholder="Butterfly" onInput={ this._handleChange } value={this.state.query}/>
     <button>Search</button>
     </form>
    );
  };
}


class FlickrGallery extends Component {
  render() {
    return (
     <h3>Gallery coming soon</h3>
    );
  };
}

class Flickr extends Component {
  constructor(props){
    super(props);
     this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q){
    console.log('fetchImages was called: ', q);
  }
  render() {
    return(
      <div>
      <h1>Search Image</h1>
      <FlickrForm onSubmit={this.fetchImages}/>
      <FlickrGallery />
      </div>
    );
  };
}


export default Flickr;

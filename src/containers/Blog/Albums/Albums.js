import React, { Component } from 'react';
import Album from "../../../components/Album/Album";

export default class Albums extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            albums: null
        }
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            if ( this.state.albums || (this.state.albums && this.state.albums.find(album => album.id !== +this.props.match.params.id) ) {
                fetch("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id + "/albums")
                .then(response => response.json())
                .then(albums => this.setState({albums: albums}))
            }
        }
    }
    
  render() {
    let albums;
    (this.state.albums)
    ?
    albums = this.state.albums.map(album => <Album key={album.id} title={album.title} id={album.id} />)
    :
    albums = null;

    return (
      <div className="Albums">
        <h1>Albums</h1>
        <ul>
            {albums}
        </ul>
      </div>
    )
  }
}

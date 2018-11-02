import React, { Component,Fragment } from 'react';
import { Route } from 'react-router-dom';

import ReactLoading from 'react-loading';
import Album from "../../../components/Album/Album";
import Photos from '../Photos/Photos';

import "./Albums.css";

export default class Albums extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            albums: null
        }
    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.albums || (this.state.albums && this.state.albums[0].userId !== +this.props.match.params.id) ) {
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
        albums = this.state.albums.map(album => (  
            <Album 
                key={album.id} 
                userId={album.userId} 
                title={album.title} 
                id={album.id} />
        ))
        :
        albums = <ReactLoading type="spokes" color="blue" width="50px"height="50px" />;

    return (
        <Fragment>
            <div className="Albums">
                <h1>Albums</h1>
                <ul>
                    {albums}
                </ul>
            </div>
            <Route path={"/users/:userId/albums/:albumId"} exact component={Photos}/>
        </Fragment>
    )
  }
}
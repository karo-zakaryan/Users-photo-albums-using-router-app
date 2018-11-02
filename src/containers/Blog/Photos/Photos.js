import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Photo from "../../../components/Photo/Photo";

import "./Photos.css";

export default class Photos extends Component {
    constructor(props) {
        super(props)
        
        this.state= {
            photos: null
        }
    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.albumId ) {
            if ( !this.state.photos || (this.state.photos && this.state.photos[0].albumId !== +this.props.match.params.albumId) ) {
                fetch("https://jsonplaceholder.typicode.com/albums/" + this.props.match.params.albumId + "/photos")
                .then(response => response.json())
                .then(photos => this.setState({photos: photos}))
            }
        }
    }
    
    render() {
        let photos;
        (this.state.photos)
            ?
            photos = this.state.photos.map(photo => (
                <Photo 
                    key={photo.id}
                    title={photo.title}
                    thumbnailUrl={photo.thumbnailUrl} />
            ))
            : 
            photos = <ReactLoading type="spokes" color="orange" width="50px"height="50px" />;

        return (
            <div className="Photos">
                {photos}
            </div>
        )
    }
}

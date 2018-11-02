import React from 'react'

const Photo = (props) => {
  return (
    <div className="Photo">
       <img src={props.thumbnailUrl} alt="AlbumImage" />
        <p>{props.title}</p>
    </div>
  )
}

export default Photo;
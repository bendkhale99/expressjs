import React from 'react';
import {} from 'react-bootstrap';
import './video.css';

function Video() {
    return (
<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        className="video"
/>
    )
}

export default Video
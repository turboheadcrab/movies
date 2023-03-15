import React from 'react';
import ReactPlayer from 'react-player';
import './Trailer.css';
import { useParams } from 'react-router-dom';

function Trailer() {
  const params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className='react-player-container'>
      {!key != null ? (
        <ReactPlayer
          controls='true'
          playing
          url={`https://www.youtube.com/watch?v=${key}`}
          width='100%'
          height='100%'
        />
      ) : null}
    </div>
  );
}

export default Trailer;

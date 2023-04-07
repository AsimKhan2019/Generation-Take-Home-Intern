import React from 'react';
import { useDispatch } from 'react-redux';
import { addMarker } from './actions';

const Marker = ({ lat, lng }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addMarker({ lat, lng }));
  };
  return (
    <div className="marker" onClick={handleClick}>
      📍
    </div>
  );
};

export default Marker;

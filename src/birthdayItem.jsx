import React from 'react';
import {Media, Image} from 'react-bootstrap';
import './App.css';

const BirthdayItem = (props) => {
  let {name, image, age} = props; // object destructuring
  return (
    <Media>
      <Image width={64} height={64} className="mr-3" src={image} alt="User" roundedCircle />
      <Media.Body>
        <h5>{name}</h5>
        <p className="font-weight-bold">{age} Years</p>
      </Media.Body>
    </Media>
  );
};

export default BirthdayItem;

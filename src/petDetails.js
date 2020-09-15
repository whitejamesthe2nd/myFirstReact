import React from 'react';
import Navigation from './Navigation';
// import PetDetails from './'
import PetDetailList from './PetDetailList';

const PetDetails = props =>
    <PetDetailList pet={props.pet} />
;
PetDetailList.defaultProps = {
    pet: {PetType:{}},
  };

export default PetDetails;

import React from 'react';
import Navigation from './Navigation';
import PetDetails from './petDetails'

const PetDetailPage = props =>
    <>
    <Navigation />
    <PetDetails pet={props.pet} />
    </>
    ;

export default PetDetailPage;

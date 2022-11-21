import React from 'react';
import BaseTemplate from '../components/templates/Base.template';
import RentTitle from '../components/Rent/RentTitle';
import RentContainer from '../components/Rent/RentContainer';

function RentPage() {
  return (
    <BaseTemplate>
      <RentTitle />
      <RentContainer />
    </BaseTemplate>
  );
}

export default RentPage;

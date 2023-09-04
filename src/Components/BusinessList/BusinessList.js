import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map(business => (
        <Business business={business} key={business.id} />
      ))}
    </div>
  );
}

export default BusinessList;


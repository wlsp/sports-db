import React from 'react';

import './List.scss';

const List = ({ children, heading }) => {
  return (
    <div className='list'>
      <h1>{heading}</h1>
      <section>{children}</section>
    </div>
  );
};

export default List;

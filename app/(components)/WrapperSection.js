import React from 'react';

export default function WrapperSection({ children }) {
  return (
    <React.Fragment>
      <img
        src='/assets/border-top-left.png'
        alt='Border'
        className='absolute top-3 left-3'
      />
      <img
        src='/assets/border-bottom-left.png'
        alt='Border'
        className='absolute bottom-3 left-3'
      />
      <img
        src='/assets/border-top-right.png'
        alt='Border'
        className='absolute top-3 right-3'
      />
      <img
        src='/assets/border-bottom-right.png'
        alt='Border'
        className='absolute bottom-3 right-3'
      />
      {children}
    </React.Fragment>
  );
}

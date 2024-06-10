import React, { FC } from 'react';
import './SliderLeftButton.scss';

const SliderLeftButton: FC = ({ onClick }: any) => {
  return (
    <div className={'wrapperButtonLeft'} onClick={() => onClick()}>
      <div className='wrapperButtonLeft_button'>
        <img src='/images/main/slider/arr.svg' alt='arrow' />
      </div>
    </div>
  );
};

export default SliderLeftButton;

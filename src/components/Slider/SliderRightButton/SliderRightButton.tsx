import React, { FC } from 'react';
import './SliderRightButton.scss';

const SliderRightButton: FC = ({ onClick }: any) => {
  return (
    <div className={'wrapperButtonRight'} onClick={() => onClick()}>
      <div className='wrapperButtonRight_button'>
        <img src='images/main/slider/arr.svg' alt='arrow' />
      </div>
    </div>
  );
};

export default SliderRightButton;

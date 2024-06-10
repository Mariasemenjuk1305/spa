import type { FC } from 'react';
import React from 'react';
import './Slider.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveSlider } from './responsiveSliderConstants';
import ContentCard from './ContentCard';
import SliderRightButton from '../Slider/SliderRightButton/SliderRightButton';
import SliderLeftButton from '../Slider/SliderLeftButton/SliderLeftButton';


import './Slider.scss';


interface Card {
  id: number;
  img: string;
  title: string;
  time: string;
  place: string;
  label: string;
  rate: string;
}

interface SliderProps {
  sliderData: Card[];
}

const Slider: FC<SliderProps> = ({ sliderData }) => {
  return (
    <Carousel
      renderButtonGroupOutside={false}
      customRightArrow={<SliderRightButton />}
      customLeftArrow={<SliderLeftButton />}
      partialVisible={true}
      additionalTransfrom={0}
      arrows={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      slidesToSlide={1}
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsiveSlider}
      focusOnSelect={false}
      infinite={true}
      minimumTouchDrag={80}
      keyBoardControl={false}
      customTransition='transform 300ms ease-in-out'
      containerClass='wrapperBox'
      itemClass='wrapperItemClass'
      removeArrowOnDeviceType={['mobile']}
      partialVisbile={false}
    >
      {sliderData.map((contentData) => (
        <div className='box' key={contentData.id}>
          <ContentCard data={contentData} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;

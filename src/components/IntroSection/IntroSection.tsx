import { useState, type FC } from 'react';

import './IntroSection.scss';
import { introData } from './introData';
import SelectComponent from '../elements/select/SelectComponent';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const IntroSection: FC = () => {
  const [selectedDaysValue, setSelecteDaysdValue] = useState('7');
  const [showAllFotos, setShowAllFotos] = useState(false);
  const { width } = useWindowDimensions();

  const isShowAllFotos = (width: number, showAllFotos: boolean) => {
    if (width > 755 || (showAllFotos === true && width < 755)) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <div className='IntroSection'>
      <div className='IntroSection__container'>
        <div className='IntroSection__container__content--dropdown'>
          <div className='IntroSection__container__content--dropdown---box'>
            <span>Trips</span>
            <span>Iceland</span>
            <SelectComponent
              selectedDaysValue={selectedDaysValue}
              setSelecteDaysdValue={setSelecteDaysdValue}
            />
          </div>
          <div className='IntroSection__container__content--dropdown---button'>
            <span>Create</span>
          </div>
        </div>
        <div className='IntroSection__container__content--img'>
          <div>
            <img src={introData[0].img} alt='intro_img' />
          </div>
          {isShowAllFotos(width, showAllFotos) &&
            <div>
              {introData.map((item, i) =>
                i > 0 ? <img src={item.img} alt='intro_img' key={i} /> : null
              )}
            </div>
          }

          <div
            onClick={() => width < 755 && setShowAllFotos(prev => !prev)}
            className='IntroSection__container__content--img---button'
          >
            All photos
          </div>
        </div>
        <div className='IntroSection__container__content--info'>
          <div>
            <div className='IntroSection__container__content--info---data'>
              <span className='IntroSection__container__content--info---data---grey'>
                Trip duration
              </span>
              <span className='IntroSection__container__content--info---data---black'>
                {selectedDaysValue} days
              </span>
            </div>
            <div className='IntroSection__container__content--info---data'>
              <span className='IntroSection__container__content--info---data---grey'>
                Exploration
              </span>
              <span className='IntroSection__container__content--info---data---black'>
                4 regions
              </span>
            </div>
            <div className='IntroSection__container__content--info---data'>
              <span className='IntroSection__container__content--info---data---grey'>
                Flight
              </span>
              <span className='IntroSection__container__content--info---data---black'>
                7h 20m from SFO
              </span>
            </div>
          </div>
          <div className='IntroSection__container__content--info---link'>
            <a href='#scroll'>View itinerary</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

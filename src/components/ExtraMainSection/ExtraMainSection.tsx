import { useState, type FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../../styles/MainPages.scss';
import Slider from '../Slider/Slider';
import { sliderData3, sliderData4 } from '../Slider/sliderData';
import { ExtraMainSectionData } from './ExtraMainSectionData';
import DetailsSection from '../DetailsSection/DetailsSection';

const ExtraMainSection: FC = () => {
  const [showDailyPlan, setShowDailyPlan] = useState(false);
  return (
    <div className='MainSection'>
      <div className='MainSection__container'>
        <div className='MainSection__container--textbox'>
          <div className='MainSection__container__content--title'>
            <div className='MainSection__container__content--title---black'>
              {ExtraMainSectionData.title}
            </div>
            <div className='MainSection__container__content--title---gray'>
              {ExtraMainSectionData.labels.map((item) => (
                <span key={uuidv4()}>{item}</span>
              ))}
            </div>
          </div>
          <div className='MainSection__container--text'>
            <p>{ExtraMainSectionData.description}</p>
          </div>
        </div>
        {!showDailyPlan ? (
          <div>
            <div className='MainSection__container--mainbox---title'>
              <span className='Title'>Region highlights</span>
              <div>
                <span onClick={() => setShowDailyPlan(true)} className='Btn'>
                  Show daily plan
                </span>
              </div>
            </div>
            <div className='MainSection__container--mainbox'>
              <Slider sliderData={sliderData3} />
            </div>
          </div>
        ) : null}

        <div className='MainSection__container--detailsbox'>
          <div className='MainSection__container--detailsbox'>
            {showDailyPlan ? (
              <DetailsSection
                setShowDailyPlan={setShowDailyPlan}
                from='extraMainSection'
              />
            ) : null}
          </div>
        </div>
        <div className='MainSection__container--staybox---title'>
          <span className='Title'>Where to stay</span>
        </div>
        <div className='MainSection__container--staybox---slider'>
          <Slider sliderData={sliderData4} />
        </div>
      </div>
    </div>
  );
};

export default ExtraMainSection;

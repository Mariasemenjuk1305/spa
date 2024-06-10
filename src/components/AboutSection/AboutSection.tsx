import type { FC } from 'react';

import './AboutSection.scss';

const AboutSection: FC = () => {
  return (
    <div className='AboutSection'>
      <div className='AboutSection__container'>
        <div className='AboutSection__container__content--title'>
          <span>Iceland's Highlights</span>
          <div>
            <span className='AboutSection__container__content--title---wishlist Btn'>
              Add to wishlist
            </span>
            <span className='AboutSection__container__content--title---share Btn'>
              Share
            </span>
          </div>
        </div>
        <div className='AboutSection__container__content--expert'>
          <div>
            <img src='images/Ava.svg' alt='Ava' />
          </div>
          <div>
            <span className='AboutSection__container__content--expert---black'>
              Curated by Sandra
            </span>
            <span className='AboutSection__container__content--expert---gray'>
              Fyno expert
            </span>
          </div>
        </div>
        <div className='AboutSection__container__content--txt'>
          Welcome to Iceland, a land of breathtaking landscapes and unspoiled
          natural beauty. From its majestic waterfalls and geothermal wonders to
          the vibrant culture and rich history, Iceland promises an
          unforgettable adventure for every traveler.
        </div>
        <div className='AboutSection__container__content--flight'>
          <div className='AboutSection__container__content--flight---title'>
            Iceland itinerary
          </div>
          <div className='AboutSection__container__content--flight---form'>
            <form action=''>
              <div className='AboutSection__container__content--flight---form-box'>
                <input
                  type='text'
                  name='flight-from'
                  placeholder='Reykjavík, KEF'
                  defaultValue=''
                />
              </div>
              <img src='images/plane-small.svg' alt='plane-small' />
              <div className='AboutSection__container__content--flight---form-box'>
                <input
                  type='text'
                  name='flight-to'
                  placeholder='San Francisco, SFO'
                  defaultValue=''
                />
              </div>
              <div className='AboutSection__container__content--flight---form-box'>
                <input
                  type='text'
                  name='flight-date'
                  placeholder='Jul 03 – Jul 11'
                  defaultValue=''
                />
                <i>
                  <img src='images/calendar-small.svg' alt='calendar-small' />
                </i>
              </div>
              <div className='AboutSection__container__content--flight---form-box'>
                <input
                  type='text'
                  name='flight-person'
                  placeholder='2'
                  defaultValue=''
                />
                <i>
                  <img src='images/person-small.svg' alt='person-small' />
                </i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from 'react';

function WeatherDetails() {
  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
          <i className='wi wi-day-sunny'></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>23°</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>
              Sunny
            </div>
            <div className='place'>
              Mumbai, IN
            </div>
          </div>     
        </div>
        <div className='date'>
          {new Date().toLocaleString()}
        </div>
        
      </article>
    </>
  )
}

export default WeatherDetails;

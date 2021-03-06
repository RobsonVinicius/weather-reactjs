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

        <div className='extra-temp'>

          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className='extra-info-leftside  '>
                6:30PM <br/>
                Sunset
              </p>
            </div>
          
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className='extra-info-leftside'>
                555 <br/>
                Humidity
              </p>
            </div>
          </div>

          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-rain'}></i>
              </p>
              <p className='extra-info-leftside'>
                555 <br/>
                Pressure
              </p>
            </div>
          
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className='extra-info-leftside'>
                322 <br/>
                Speed
              </p>
            </div>
          </div>

        </div>
        
      </article>
    </>
  )
}

export default WeatherDetails;

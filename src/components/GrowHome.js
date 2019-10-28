import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import moment from 'moment';

const GrowHome = (props) =>{
    const { date, dayTime, temperature, timeout } = props;
    const day = moment(date).format('dddd');
    const icon = dayTime.Icon;
    const iconPhrase = dayTime.IconPhrase
    console.log(day) 

    const convertFromFahrenheit = (num) =>{
        let result = (num-32)*5/9;
       return result.toFixed(0)
    }

    return(
        <Grow in={true} {...(true ? { timeout: timeout } : {})}>
        {/* // <Grow in={true}> */}
          <Paper elevation={4}>
          <div className="grow">
              <div className="day-container">
                  <p>{day}</p>
                  <p>{convertFromFahrenheit(temperature)}&#176;</p>
              </div>
              <div className="img-container">
                  <img src={`https://www.accuweather.com/images/weathericons/${icon}.svg`}/>
                  <p>{iconPhrase}</p>
              </div>
            </div>
          </Paper>
        </Grow>
    )
}

export default GrowHome
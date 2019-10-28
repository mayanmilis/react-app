import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import moment from 'moment';

const GrowFavorites = (props) =>{
    const { icon, iconPhrase, temperature, timeout } = props;

    const convertFromFahrenheit = (num) =>{
        let result = (num-32)*5/9;
       return result.toFixed(0)
    }

    const city = "Tel Aviv"
    console.log(props)
    return(
        <Grow in={true} {...(true ? { timeout: timeout } : {})}>
        {/* // <Grow in={true}> */}
          <Paper elevation={4}>
          <div className="grow">
              <div className="day-container">
                <div>{city}</div>
                <p>{temperature.Value}&#176; {temperature.Unit.toLowerCase()}</p>
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

export default GrowFavorites
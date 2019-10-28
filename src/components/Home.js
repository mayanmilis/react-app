import React, { Component } from 'react';
import Search from './Search';
import "./Home.scss";
import GrowHome from './GrowHome';
import { searchResult, forecast, current } from '../Exaples';
import { mdiHeart } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


class Home extends Component {

    addToFavorites = () =>{
        // localStorage.setItem(keyName, keyValue);
    }

    render() {
        let test = ['a','b','c','d','e'];
        // https://www.accuweather.com/images/weathericons/33.svg
        let iconNumber = current[0].WeatherIcon;
        let cityName = searchResult[0].EnglishName;
        let weatherText = current[0].WeatherText;
        let temperature = current[0].Temperature
        let dailyForcast = forecast.DailyForecasts; 
        console.log(searchResult,forecast,current,iconNumber,dailyForcast)
        return (
                <div className="home-container">
                    <div className="search-container">
                        <Search
                        placeholder="Search for a city"
                        />  
                    </div>
                    <div className="result-container">
                        <div className="result-top">
                            <div className="city-container">
                                <div className="img-container">
                                    <img src={`https://www.accuweather.com/images/weathericons/${iconNumber}.svg`}/>
                                </div>
                                <div className="details-container">
                                    <p>{cityName}</p>
                                    <span>{temperature.Metric.Value}&#176;{temperature.Metric.Unit}</span>
                                </div>
                            </div>
                            <div className="favorites-container">
                                    <Icon path={mdiHeart}
                                    title="User Profile"
                                    size={1}
                                    horizontal
                                    vertical
                                    rotate={180}
                                    color="red"
                                    />
                                    <Button color="inherit" onClick={this.addToFavorites}>Add to favorites</Button>
                            </div>
                        </div>
                        <div className="result-bottom">
                            <div className="header-container">
                                <h1>{weatherText}</h1>
                            </div>
                            <div className="forecast-container">
                                {dailyForcast&&dailyForcast.map(item =>{
                                    let timeout = dailyForcast.indexOf(item)*1000+1000;
                                    let key = dailyForcast.indexOf(item);
                                    return(
                                        <div key={key} className="grow-container">
                                            <GrowHome
                                            date={item.Date}
                                            dayTime={item.Day}
                                            temperature={item.Temperature.Maximum.Value}
                                            timeout={timeout}
                                            /> 
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Home
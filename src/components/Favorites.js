import React, { Component } from 'react';
import { searchResult, forecast, current } from '../Exaples';
import GrowFavorites from './GrowFavorites';
import './Favorites.scss';

class Favorites extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        this.setState({
            favorites: current
        });
    }

    render() {
        const favorites = this.state.favorites;
        console.log(favorites)
        return(
            <div className="favorites-container">
                <div className="list-container">
                    <ul>
                        {favorites&&favorites.map( item => {
                            return(
                                <GrowFavorites
                                temperature={item.Temperature.Metric}
                                icon={item.WeatherIcon}
                                iconPhrase={item.WeatherText}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Favorites
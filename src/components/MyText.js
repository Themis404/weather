import React from 'react';
import InputForm from './inputForm.js';
import * as weatherActions from '../actions/weatherActions';

class MyText extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        temper: "",
        name: "",
        description: "",
        icon: "",
        city: "",
        error: false
      };
    }

    getInfo(city){
        this.setState({
          city: city
        }, () => {
          weatherActions.getWeather(this.state.city)
          .then(allWeather => {
              if (!allWeather) {
                return this.setState({error: true});
              }
              this.setState({
                  temper: allWeather.main.temp,
                  name: allWeather.name,
                  description: allWeather.weather[0].description,
                  icon: allWeather.weather[0].icon
                });
          });
        });
    }

    render(){
        return (
            <div>
                <InputForm onPushed = {city => this.getInfo(city)}/>
                <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt={this.state.description} />
                <h1>{this.state.name}</h1>
                <h1>{this.state.temper}</h1>
            </div>
        )
    }
}

export default MyText;

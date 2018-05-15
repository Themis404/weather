import React from 'react';
import InputForm from './inputForm.js'

function toCelcius(temperature) {
    let newTemperature = temperature - 273;
    return newTemperature.toFixed(1);
}

class MyText extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        temper: "",
        name: "",
        description: "",
        icon: "",
        city: ""
      };
    }

    getInfo(city){
        this.setState({
          city: city
        })

        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=1b9c13e376b055d768f0600e5e93853e&units=imperial')
        .then((response) => {
            console.log(response);
            return response.json()
          })
        .then((allWeather)=>{
            console.log(allWeather);
            this.setState({
                temper: toCelcius(allWeather.main.temp),
                name: allWeather.name,
                description: allWeather.weather[0].description,
                icon: allWeather.weather[0].icon
              });
        });
        console.log(city);
    }

    onPushed(city){
        this.getInfo(city)
    }

    render(){
        const iconURL = `http://openweathermap.org/img/w/${this.state.icon}.png`;
        return (
            <div>
                <InputForm onPushed = {this.onPushed}/>
                <img src={iconURL} alt={this.state.description} />
                <h1>{this.state.name}</h1>
                <h1>{this.state.temper}</h1>
                </div>
        )
    }
}

export default MyText;

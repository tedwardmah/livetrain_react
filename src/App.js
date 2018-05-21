import React, { Component } from 'react';
// TODO: Make this AppConfig work
// import AppConfig from './config/AppConfig.js';
import NycMap from './components/NycMap.js';
import './App.css';
import 'mapbox.js/theme/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainsData: [],
      countingDown: false,
      selectedRoutes: []
    }
  }

  componentDidMount = () => {
    this.fetchTrainsData('');
  }  

  fetchTrainsData = (url) => {
    var self = this;
    // fetch(AppConfig.apiDomain + url)
    fetch("https://michael-backend.cnevids.com/")
      .then(response => {
        return response.json();
      })
      .then(newTrainsData => {
        console.log(newTrainsData);
        self.setState({
          // trainsData: newTrainsData
          trainsData: newTrainsData.concat()
        });
      })
      .catch(function(err) {
        console.log('No data found', err);
      });
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LiveTrain NYC <span>...a vizualization of realtime MTA subway locations</span></h1>
        </header>

        <NycMap
          trainsData={this.state.trainsData} />

        {/*<div id='station-countdown' class='hidden'>
          <div id='station-countdown-header'>
            <h3><div class='close-button'>&times</div><div id='station-name'>Station Name</div></h3>
          </div>
          <div id='countdown-info'></div>
        </div>

        <div id='train-info-container' class='hidden'>
          <div id='train-info-header'>
            <h3><div class='close-button' id='train-close-button'>&times</div><div id='train-info-icon'></div><div id='train-direction'></div></h3>
          </div>
          <div id='train-info'></div>
        </div>

        <div id='line-controls'>
            <ul>
              <li class='line-selector selected' id='line-selector-all' data-route='All'><div class='line-selector-icon icon-all'>All</div></li>
              <li class="line-selector selected" id='line-selector-1' data-route='1'><div class='line-selector-icon icon-1'>1</div></li>
              <li class="line-selector selected" id='line-selector-2' data-route='2'><div class='line-selector-icon icon-2'>2</div></li>
              <li class="line-selector selected" id='line-selector-3' data-route='3'><div class='line-selector-icon icon-3'>3</div></li>
              <li class="line-selector selected" id='line-selector-4' data-route='4'><div class='line-selector-icon icon-4'>4</div></li>
              <li class="line-selector selected" id='line-selector-5' data-route='5'><div class='line-selector-icon icon-5'>5</div></li>
              <li class="line-selector selected" id='line-selector-6' data-route='6'><div class='line-selector-icon icon-6'>6</div></li>
              <li class="line-selector selected" id='line-selector-L' data-route='L'><div class='line-selector-icon icon-L'>L</div></li>
              <li class="line-selector selected" id='line-selector-S' data-route='S'><div class='line-selector-icon icon-S'>S</div></li>
            </ul>
        </div> */}

      </div>      
    );
  }
}

export default App;

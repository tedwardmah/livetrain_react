import React, { Component } from 'react';
// TODO: Make this AppConfig work
// import AppConfig from '../config/AppConfig.js';
import Mapbox from 'mapbox.js';
// import d3 from 'd3';

var AppConfig = {
  apiDomain: "https://michael-backend.cnevids.com/",
  mapbox: {
    accessToken: "pk.eyJ1IjoibWpwcnVkZSIsImEiOiJiVG8yR2VrIn0.jtdF6eqGIKKs0To4p0mu0Q",
    mapId: "mjprude.l44chham",
    startingZoom: 12,
    maxZoom: 19,
    minZoom: 11,
    largeSVGAnchorCoordinates: [-74.39529418945312, 40.96227093228072]
  }
};

class NycMap extends Component {

  componentDidMount = () => {
    this.initializeMapbox();
  }

  getMaxBounds = () => {
    const northEastBounds = Mapbox.latLng(40.99803873280107, -73.40652465820311);
    const southWestBounds = Mapbox.latLng(40.493437209343654, -74.39529418945312);
    return Mapbox.latLngBounds(southWestBounds, northEastBounds);
  }

  initializeMapbox = () => {
    var self = this;
    Mapbox.mapbox.accessToken = AppConfig.mapbox.accessToken;
    var map = Mapbox.mapbox.map('map', AppConfig.mapbox.mapId, {
      maxZoom: AppConfig.mapbox.maxZoom,
      minZoom: AppConfig.mapbox.minZoom,
      maxBound: self.getMaxBounds(),
      zoomControl: false
    })
    .setView([40.75583970971843, -73.90090942382812], AppConfig.mapbox.startingZoom);
    new Mapbox.Control.Zoom({ position: 'bottomleft' }).addTo(map);
  }

  render() {
    return (
      <div id='map'></div>
    )
  }
}

export default NycMap;
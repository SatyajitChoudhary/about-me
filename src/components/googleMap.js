import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// this is advance version of including GMap - will work later

const AnyReactComponent = ({ text }) => (
  <div
    style={{ height: 80, width: 80, backgroundColor: "purple", color: "white" }}
  >
    Satyajit Choudhary lives here
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 22.64,
      lng: 88.37,
    },
    zoom: 10,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={22.64} lng={88.37} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { withGoogleMap, GoogleMap, Marker } from "google-map-react";
import { InfoWindow } from "google-map-react";
import Geolocation from "react-geolocation";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11
};

constructor(props) {
    super(props);

    this.state = props;
}

geoSuccess = position => {
    console.log("position.coords.latitude: ", position.coords.latitude);
    console.log("position.coords.longitude: ", position.coords.longitude);
    
    let coords = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
    }
    
    this.setState({
    center: coords
    })
};

render() {
    console.log(this.state.center);
    console.log(this.state.zoom);

    return (
    <Geolocation
        onSuccess={this.geoSuccess}
        render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
        }) => (
        <div>
            <button onClick={getCurrentPosition}>Get Position</button>
            {error && <div>{error.message}</div>}
            <pre>
            latitude: {latitude}
            longitude: {longitude}
            </pre>
            <div
            className="google-map"
            style={{ height: "80vh", width: "100%" }}
            >
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDZ6LLCf_H_2jGMjh3oxB75j-lhUUel52A' }}
                center={this.state.center}
                zoom={this.state.zoom}
            >
                <AnyReactComponent
                lat={latitude}
                lng={longitude}
                text={"Wheres Waldo?"}
                />
            </GoogleMapReact>
            </div>
        </div>
        )}
    />
    );
}
}

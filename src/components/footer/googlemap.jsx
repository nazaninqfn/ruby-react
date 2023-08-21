import React from "react";
import GoogleMapReact from 'google-map-react';
import { Component } from "react";
const markerStyle={
    position: 'absolute',
    top:'10%',
    transform: 'translateX(-50%)',
    left:"10%",
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component{
static defaultProps = {
    center: {
    lat: 10.99835602,
    lng: 77.01502627
    },
    zoom: 11
};
render() {
return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA5es7xSkQsan0h9Gmscg7RaLv3rMNG5mI" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
    >
        <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text={<img style={markerStyle} alt="ll"/>}
        
        />
    </GoogleMapReact>
    </div>
);
}};

export default SimpleMap;
// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
// const defaultProps = {
//     center: {
//     lat:36.597632,
//     lng:53.06462 
//     },
//     zoom: 11
// };

// return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//     <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyA5es7xSkQsan0h9Gmscg7RaLv3rMNG5mI" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//     >
//         <AnyReactComponent
//         lat={36.597632}
//         lng={53.06462}
        
//         text="آکادمی بحر"
//         />
//     </GoogleMapReact>
//     </div>
// );
// }
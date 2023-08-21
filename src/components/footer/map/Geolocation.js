import React from "react";
import Geolocation from "react-geolocation";

export default Geolocation= () => {
return (
    <Geolocation
    onSuccess={console.log}
    render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
    }) =>
        <div>
        <button onClick={getCurrentPosition}>Get Position</button>
        {error &&
            <div>
            {error.message}
            </div>}
        <pre>
            latitude: {latitude} 
            longitude: {longitude}
        </pre>
        </div>}
    />
);
};

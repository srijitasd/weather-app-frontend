import React, { useEffect, useState } from "react";

function useCurrentLocation() {
  const [state, setState] = useState({ lat: undefined, long: undefined });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setState({ ...state, lat: position.coords.latitude, long: position.coords.longitude });
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return { lat: state.lat, long: state.long };
}

export default useCurrentLocation;

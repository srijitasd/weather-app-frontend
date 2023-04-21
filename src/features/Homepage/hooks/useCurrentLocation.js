import { useEffect, useState } from "react";

function useCurrentLocation() {
  const [state, setState] = useState(() => {
    return { lat: null, long: null };
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setState((prev) => {
          return { ...prev, lat: position.coords.latitude, long: position.coords.longitude };
        });
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return { lat: state.lat, long: state.long };
}

export default useCurrentLocation;

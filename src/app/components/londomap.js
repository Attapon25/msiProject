"use client";

import { useEffect, useState } from "react";

export default function LongdoMap() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Dynamically add the Longdo Map script after the component mounts
    const script = document.createElement("script");
    script.src = `https://api.longdo.com/map/?key=${process.env.NEXT_PUBLIC_LONGDO_API_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    // Once the script is loaded, initialize the map
    script.onload = () => {
      if (window.longdo) {
        const newMap = new longdo.Map({
          placeholder: document.getElementById("map"),
          lastView: false, // Prevent map from loading with previous session view
        });

        setMap(newMap); // Set the map in state

        // Automatically center the map using the user's geolocation
        newMap.location(longdo.LocationMode.Geolocation);

        // Get the map's current location (center) and store it in state
        const result = newMap.location();
        setCurrentLocation(result); // Store the location in the state
        console.log("Current map center:", result);
      }
    };

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to move the map to the user's location when the button is clicked
  const moveToLocation = () => {
    if (map) {
      map.location(longdo.LocationMode.Geolocation); // Move map to user's current location
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Placeholder for the map with reduced size */}
      <div className="relative h-[400px] w-[600px] border border-gray-300 rounded-lg shadow-md bg-white">
        <div id="map" className="h-full w-full"></div>

        {/* {currentLocation && (
          <div
            className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg z-10"
            style={{ width: "250px" }}
          >
            <h4 className="font-semibold text-lg">Current Location:</h4>
            <p>Latitude: {currentLocation.lat}</p>
            <p>Longitude: {currentLocation.lon}</p>
          </div>
        )} */}
      </div>

      {/* Button to move the map to the current location */}
      <button
        onClick={moveToLocation}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Move to Current Location
      </button>
    </div>
  );
}

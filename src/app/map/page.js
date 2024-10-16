// "use client";
// import React from "react";
// import LongdoMap from "../components/londomap";
// function map() {
//   return (
//     <div>
//       <LongdoMap />
//     </div>
//   );
// }

// export default map;

"use client";

import LongdoMap from "../components/LongdoMap";

export default function MapPage() {
  const mapKey = process.env.NEXT_PUBLIC_LONGDO_API_KEY; // ดึง API key จาก environment variable

  const initMap = (map, longdo) => {
    console.log("Map Initialized", map, longdo);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
      </div>
    </div>
  );
}

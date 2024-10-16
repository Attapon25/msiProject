"use client";

import { useEffect, useRef, useState } from "react";

export default function LongdoMap({ id, mapKey, callback }) {
  const mapRef = useRef(null); // ใช้ ref เพื่ออ้างอิง div ที่แสดงแผนที่
  const [mapInstance, setMapInstance] = useState(null); // เก็บตัวแปร map เพื่อใช้เคลื่อนที่

  useEffect(() => {
    const scriptId = "longdoMapScript";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://api.longdo.com/map/?key=${mapKey}`;
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.longdo) {
          const longdo = window.longdo;
          const map = new longdo.Map({
            placeholder: mapRef.current,
            language: "en",
          });

          // ตั้งค่า layer
          map.Layers.setBase(longdo.Layers.GRAY);

          // บันทึก instance ของแผนที่เพื่อใช้ภายหลัง
          setMapInstance(map);

          // ถ้ามี callback ให้เรียกใช้
          if (callback) callback(map, longdo);
        }
      };
    } else {
      if (window.longdo) {
        const longdo = window.longdo;
        const map = new longdo.Map({
          placeholder: mapRef.current,
          language: "en",
        });

        map.Layers.setBase(longdo.Layers.GRAY);

        // บันทึก instance ของแผนที่เพื่อใช้ภายหลัง
        setMapInstance(map);

        if (callback) callback(map, longdo);
      }
    }

    return () => {
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [mapKey, callback]);

  // ฟังก์ชันที่จะเรียกใช้เมื่อผู้ใช้กดปุ่ม เพื่อเคลื่อนที่ไปยังตำแหน่งปัจจุบัน
  const handleMoveToCurrentLocation = () => {
    if (mapInstance) {
      mapInstance.location(longdo.LocationMode.Geolocation); // เคลื่อนที่ไปยังตำแหน่งปัจจุบัน
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-1/2">
      {/* Placeholder for the map with reduced size */}
      <div className="relative h-[400px] w-[600px] border border-gray-300 rounded-lg shadow-md bg-white">
        <div id={id} ref={mapRef} className="w-full h-full" />
      </div>

      {/* Display the current location */}
      <button
        onClick={handleMoveToCurrentLocation}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Move to Current Location
      </button>
    </div>

    // <div className="relative w-full h-64 sm:w-96 sm:h-72 md:w-[500px] md:h-[400px]">
    //   {/* แผนที่ */}
    //   <div id={id} ref={mapRef} className="w-full h-full" />

    //   {/* ปุ่มสำหรับเคลื่อนที่ไปยังตำแหน่งปัจจุบัน */}
    //   <button
    //     onClick={handleMoveToCurrentLocation}
    //     className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
    //   >
    //     Move to Current Location
    //   </button>
    // </div>
  );
}

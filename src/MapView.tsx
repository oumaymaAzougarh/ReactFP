import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import "@arcgis/core/assets/esri/themes/light/main.css";

const ArcGISMap: React.FC = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<MapView | SceneView | null>(null);
  const [is3D, setIs3D] = useState(false); // To track whether the map is 3D or 2D

  useEffect(() => {
    if (mapDivRef.current) {
      // Initialize the map in 2D mode by default
      const map = new Map({
        basemap: "streets-navigation-vector", // You can change this to any basemap you prefer
      });

      const initialView = new MapView({
        container: mapDivRef.current,
        map: map,
        center: [-118.805, 34.027], // Longitude, Latitude
        zoom: 13,
        ui: { components: [] }, // Disable default UI components
      });

      setView(initialView); // Save the current view

      // Cleanup on unmount
      return () => {
        if (view) {
          view.destroy();
        }
      };
    }
  }, []);

  const switchTo3D = () => {
    if (view && !is3D) {
      // Load the required ArcGIS modules dynamically
      loadModules(['esri/Map', 'esri/views/SceneView', 'esri/layers/WebTileLayer'])
        .then(([Map, SceneView, WebTileLayer]) => {
          // Initialize the 3D map
          const map = new Map({
            basemap: 'streets', // You can switch to other basemaps as needed
          });

          // Create the SceneView (3D view)
          const sceneView = new SceneView({
            container: mapDivRef.current,
            map: map,
            camera: {
              position: [-118.80500, 34.02700, 1500], // Longitude, Latitude, Altitude
              tilt: 75, // Tilt for 3D effect
            },
            ui: {
              components: [] // Disable default UI components, including zoom controls
            },
          });

          // Add the WebTileLayer (optional)
          const tileLayer = new WebTileLayer({
            urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{level}/{col}/{row}',
          });

          map.add(tileLayer); // Add the WebTileLayer to the map

          // Cleanup on unmount
          return () => {
            if (sceneView) {
              sceneView.destroy();
            }
          };
        })
        .catch((err) => {
          console.error('Error loading ArcGIS modules:', err);
        });

      // Set the new 3D view
      setIs3D(true);
    }
  };

  const switchTo2D = () => {
    if (view && is3D) {
      const map = view.map; // Reuse the map instance
      const container = view.container; // Reuse the container element

      // Create the MapView (2D view)
      const newView = new MapView({
        container,
        map,
        center: view.center.clone(), // Keep the same center
        zoom: view.zoom, // Keep the same zoom level
        ui: { components: [] }, // Disable default UI components
      });

      // Destroy the previous 3D view if it exists and set the new 2D view
      if (view instanceof SceneView) {
        view.destroy();
      }

      setView(newView); // Set the new 2D view
      setIs3D(false); // Set mode to 2D
    }
  };

  const zoomIn = () => {
    if (view) {
      if (view instanceof MapView) {
        view.zoom += 1; // Zoom in for MapView (2D)
      } else if (view instanceof SceneView) {
        const camera = view.camera.clone();
        camera.position.z /= 2; // Zoom in (decrease altitude for SceneView)
        view.camera = camera;
      }
    }
  };

  const zoomOut = () => {
    if (view) {
      if (view instanceof MapView) {
        view.zoom -= 1; // Zoom out for MapView (2D)
      } else if (view instanceof SceneView) {
        const camera = view.camera.clone();
        camera.position.z *= 2; // Zoom out (increase altitude for SceneView)
        view.camera = camera;
      }
    }
  };

  return (
    <div className="relative">
      {/* Map Container */}
      <div
        ref={mapDivRef}
        className="relative w-[1430px] h-[500px] top-[10px] left-1 shadow-md rounded-lg"
      ></div>

      {/* Controls */}
      <div className="absolute top-[10px] left-[30px] w-[1840px] flex items-center gap-2 bg-white bg-opacity-0 p-2">
        {/* Site 001 Label */}
        <div className="w-[78px] h-[30px] flex items-center justify-center bg-gray-200 rounded">
          Site 001
        </div>

        {/* Map Label */}
        <div className="w-[100px] h-[24px] flex items-center relative left-[1070px] justify-center bg-[#568DDF] text-white rounded-l-lg">
          {/* Icon */}
          <img
            src="map.png" // Replace this with the actual path to your image
            alt="Map Icon"
            className="w-5 h-5 mr-2"
          />
          Map
        </div>

        {/* Mode Switch Buttons (2D/3D) */}
        <div className="flex items-center gap-1 left-[10px] relative left-[870px]">
          <button
            onClick={switchTo2D}
            className={`w-[30px] h-[24px] ${
              !is3D ? "bg-blue-500 text-white" : "bg-gray-50 text-[#777777]"
            } flex items-center justify-center`}
          >
            2D
          </button>
          <button
            onClick={switchTo3D}
            className={`w-[30px] h-[24px] ${
              is3D ? "bg-blue-500 text-white" : "bg-gray-50 text-[#777777]"
            } flex items-center justify-center`}
          >
            3D
          </button>
        </div>

        {/* Zoom Buttons */}
        <div className="flex items-center gap-0 left-[700px] relative">
          <button
            onClick={zoomIn}
            className="w-[30px] h-[24px] bg-gray-50 text-[#777777] rounded flex items-center justify-center"
          >
            +
          </button>
          <button
            onClick={zoomOut}
            className="w-[30px] h-[24px] bg-gray-50 text-[#777777] rounded flex items-center justify-center"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArcGISMap;

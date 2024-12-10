import React, { useEffect, useRef } from "react";
import Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

function CesiumViewer() {
  const cesiumContainerRef = useRef(null);

  useEffect(() => {
    if (cesiumContainerRef.current) {
      try {
        const viewer = new Cesium.Viewer(cesiumContainerRef.current, {
          imageryProvider: false,
          baseLayerPicker: false,
          requestRenderMode: true,
        });

        const tileset = viewer.scene.primitives.add(
          new Cesium.Cesium3DTileset({
            url: "https://tile.googleapis.com/v1/3dtiles/root.json?key=YOUR_VALID_API_KEY",
            showCreditsOnScreen: true,
          })
        );

        viewer.scene.globe.show = false;

        // Cleanup on component unmount
        return () => {
          if (viewer && !viewer.isDestroyed()) {
            viewer.destroy();
          }
        };
      } catch (error) {
        console.error("Cesium initialization failed:", error);
      }
    }
  }, []);

  return (
    <div
      ref={cesiumContainerRef}
      style={{
        width: "100%",
        height: "100vh",
        border: "1px solid red", // Debugging styles
      }}
    />
  );
}

export default CesiumViewer;

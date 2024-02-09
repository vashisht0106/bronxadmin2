import { Box,Center,Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { bgColour } from '../Dynamic';

const Layouts = [
  { id: 1, name: 'Layout 1', resolution: 720 },
  { id: 2, name: 'Layout 2', resolution: 1080 },
  { id: 3, name: 'Layout 3', resolution: 480 },
];

const VideoResolutionAdjuster = () => {
  const [selectedLayout, setSelectedLayout] = useState(Layouts[0]); // Initial layout
  const [resolution, setResolution] = useState(selectedLayout.resolution); // Initial resolution

  // Handler to update resolution based on drag
  const handleDrag = (e) => {
    const newResolution = Math.round((e.clientX / window.innerWidth) * 1080); // Assuming maximum resolution is 1080
    setResolution(newResolution);
    // Update the resolution of the selected layout
    const updatedLayouts = Layouts.map(layout =>
      layout.id === selectedLayout.id ? { ...layout, resolution: newResolution } : layout
    );
    setSelectedLayout({ ...selectedLayout, resolution: newResolution });
  };

  return (
    <Box bg={bgColour} justifyContent={'center'} width={'85.7%'}>
      {/*<select value={selectedLayout.id} onChange={(e) => setSelectedLayout(Layouts.find(layout => layout.id === parseInt(e.target.value)))}>
        {Layouts.map(layout => (
          <option key={layout.id} value={layout.id}>{layout.name}</option>
        ))}
      </select>
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: 'lightgray',
          position: 'relative',
          cursor: 'ew-resize', // Cursor style for draggable
        }}
        onMouseMove={(e) => handleDrag(e)}
      >
        <div
          style={{
            width: '10px',
            height: '100%',
            backgroundColor: 'blue',
            position: 'absolute',
            left: `${(resolution / 1080) * 100}%`, // Position the draggable element based on resolution
            transform: 'translateX(-50%)', // Center the draggable element
          }}
        />
      </div>*/}

<Center>

      <Text>sdkjg</Text>

</Center>
    </Box>
  );
};

export default VideoResolutionAdjuster;

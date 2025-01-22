## Example: Creating a Custom Hook
### Suppose you want to track the window width and use it in multiple components.

### Custom Hook: useWindowWidth

import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export default useWindowWidth;

### Using the Custom Hook in a Component

import React from 'react';
import useWindowWidth from './useWindowWidth';

function DisplayWidth() {
  const width = useWindowWidth();

  return <h1>Window width: {width}px</h1>;
}

function App() {
  return (
    <div>
      <DisplayWidth />
    </div>
  );
}

export default App;

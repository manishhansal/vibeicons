import React, { useState } from 'react';
import { ExampleIcon, AnimatedIconProps } from 'vibeicons';

function App() {
  const [props, setProps] = useState<AnimatedIconProps>({
    size: 100,
    color: '#333',
    animate: true,
    theme: 'light',
    variant: 'outline',
  });

  return (
    <div>
      <h1>Animated Icons Playground</h1>
      <ExampleIcon {...props} />
      <div>
        {/* Add controls to change the props */}
      </div>
    </div>
  );
}

export default App;
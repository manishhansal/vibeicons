# VibeIcons

[![npm version](https://img.shields.io/npm/v/vibeicons.svg)](https://www.npmjs.com/package/vibeicons)

VibeIcons is a lightweight and beautifully animated SVG icon library for React, powered by the delightful animations of [Framer Motion](https://www.framer.com/motion/).

## Features

- **Beautiful Animations**: Each icon is animated with care to provide a smooth and engaging user experience.
- **Fully Customizable**: Easily change size, color, stroke width, and animation style via props.
- **Light & Dark Mode Aware**: Built-in support for system, light, and dark themes.
- **Tree-Shakable**: Only the icons you import will be included in your final bundle.
- **Developer Friendly**: A simple API and a streamlined process for adding new icons.

## Installation

Install the package and its peer dependencies using npm:

```bash
npm install vibeicons framer-motion react
```

## Usage

Import any icon and use it in your React components. All icons are designed to work seamlessly out of the box.

```jsx
import React from 'react';
import { ExampleIcon } from 'vibeicons';

const MyComponent = () => {
  return (
    <div>
      <ExampleIcon size={48} color="#3498db" />
    </div>
  );
};

export default MyComponent;
```

## API and Props

All icons accept the following props to allow for easy customization:

| Prop                | Type                         | Default         | Description                                                                                             |
| ------------------- | ---------------------------- | --------------- | ------------------------------------------------------------------------------------------------------- |
| `size`              | `string \| number`           | `'1em'`         | The width and height of the icon.                                                                       |
| `color`             | `string`                     | `'currentColor'`| The stroke or fill color of the icon.                                                                   |
| `animate`           | `boolean`                    | `true`          | Whether to enable the mount animation.                                                                  |
| `variant`           | `'outline' \| 'solid'`       | `'outline'`     | The style of the icon. `outline` uses strokes, while `solid` uses fills.                               |
| `theme`             | `'light' \| 'dark' \| 'system'` | `'light'`       | The color theme to apply. `'system'` automatically detects the user's OS preference.                 |
| `animationVariants` | `Variants` (from Framer Motion) | `defaultVariants` | Override the default `framer-motion` variants for custom `initial` and `animate` states. |


### Custom Animations

You can provide your own `framer-motion` variants to create custom animations.

```jsx
import { ExampleIcon } from 'vibeicons';

const customAnimation = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 0.5 } },
};

const AnimatedComponent = () => (
  <ExampleIcon animationVariants={customAnimation} />
);
```

## Contributing

Contributions are welcome! If you'd like to add a new icon, you can follow these steps.

### Adding a New Icon

1.  **Run the script**: Use the built-in script to generate a new icon component. Replace `NewIconName` with the name of your icon (e.g., `Heart`).

    ```bash
    npm run generate:icon NewIconName
    ```

2.  **Add SVG Code**: The script will create a new file at `src/icons/NewIconNameIcon.tsx`. Open this file and paste your SVG path data inside the `<IconWrapper>` component.

    ```tsx
    // src/icons/NewIconNameIcon.tsx
    const NewIconNameIcon: React.FC<AnimatedIconProps> = (props) => (
      <IconWrapper {...props}>
        {/* Paste your SVG path data here, for example: */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </IconWrapper>
    );
    ```

3.  **Test Your Icon**: You can see your new icon in the demo application by running `npm run dev` and adding your icon to `demo/src/App.tsx`. Don't forget to add a test file for it in the `tests` directory!

## License

This project is licensed under the MIT License.
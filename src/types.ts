import { Variants } from 'framer-motion';

export interface AnimatedIconProps {
  size?: string | number;
  color?: string;
  animate?: boolean;
  theme?: 'light' | 'dark' | 'system';
  variant?: 'outline' | 'solid';
  animationVariants?: Variants;
}
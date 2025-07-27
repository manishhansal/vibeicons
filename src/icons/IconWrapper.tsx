"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { AnimatedIconProps } from '../types';
import { useSystemTheme } from '../utils';

const defaultVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const IconWrapper: React.FC<React.PropsWithChildren<AnimatedIconProps>> = ({
  children,
  size = '1em',
  color = 'currentColor',
  animate = true,
  theme = 'light',
  variant = 'outline',
  animationVariants = defaultVariants,
}) => {
  const systemTheme = useSystemTheme();
  const finalTheme = theme === 'system' ? systemTheme : theme;

  const iconColor =
    finalTheme === 'dark'
      ? color === 'currentColor'
        ? '#FFFFFF'
        : color
      : color === 'currentColor'
      ? '#000000'
      : color;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={variant === 'solid' ? iconColor : 'none'}
      stroke={variant === 'outline' ? iconColor : 'none'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={animationVariants}
      initial={animate ? 'hidden' : 'visible'}
      animate={animate ? 'visible' : 'hidden'}
    >
      {children}
    </motion.svg>
  );
};

export default IconWrapper;
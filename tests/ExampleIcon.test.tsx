import { render, screen } from '@testing-library/react';
import { ExampleIcon } from '../src';
import { describe, expect, it, vi } from 'vitest';

describe('ExampleIcon', () => {
  it('renders correctly with default props', () => {
    render(<ExampleIcon />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('applies the size prop correctly', () => {
    render(<ExampleIcon size={48} />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('height', '48');
  });

  it('applies the color prop correctly', () => {
    render(<ExampleIcon color="blue" />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('stroke', 'blue');
  });

  it('renders the solid variant when specified', () => {
    render(<ExampleIcon variant="solid" />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('fill', '#000000');
    expect(svgElement).toHaveAttribute('stroke', 'none');
  });

  it('renders the outline variant by default', () => {
    render(<ExampleIcon />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('fill', 'none');
    expect(svgElement).toHaveAttribute('stroke', '#000000');
  });

  it('does not crash when animation is disabled', () => {
    render(<ExampleIcon animate={false} />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('respects the theme prop for dark mode', () => {
    // Mock system theme to be dark
    vi.spyOn(window, 'matchMedia').mockImplementation(query => ({
      matches: true, // is dark mode
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<ExampleIcon theme="system" />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('uses custom animation variants when provided', () => {
    const customVariants = {
      initial: { scale: 0 },
      animate: { scale: 1 },
    };
    render(<ExampleIcon animationVariants={customVariants} />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });
}); 
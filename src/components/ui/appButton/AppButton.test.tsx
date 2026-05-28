import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AppButton from './AppButton';

describe('AppButton Component', () => {
  it('renders children correctly', () => {
    render(<AppButton>Click Me</AppButton>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('fires onClick event when clicked', () => {
    const handleClick = vi.fn();
    render(<AppButton onClick={handleClick}>Submit</AppButton>);
    
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders primary variant by default', () => {
    const { container } = render(<AppButton>Primary Button</AppButton>);
    const button = container.firstChild as HTMLElement;
    
    // We expect the button to have MUI's contained class by default
    expect(button.className).toMatch(/MuiButton-contained/);
  });

  it('renders outline variant when specified', () => {
    const { container } = render(<AppButton variantType="outline">Outline Button</AppButton>);
    const button = container.firstChild as HTMLElement;
    
    // We expect the button to have MUI's outlined class when outline is passed
    expect(button.className).toMatch(/MuiButton-outlined/);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import PopoverCard from './PopoverCard';

describe('PopoverCard Component', () => {
  it('renders title and triggers onClick', () => {
    const handleClick = vi.fn();
    render(
      <PopoverCard 
        title="Card Title" 
        icon={<span>Icon</span>} 
        onClick={handleClick} 
      />
    );
    
    const card = screen.getByText('Card Title');
    expect(card).toBeInTheDocument();
    
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import BulletList from './BulletList';

describe('BulletList Component', () => {
  it('renders a list of items correctly', () => {
    const items = ['First Item', 'Second Item'];
    render(<BulletList items={items} />);
    
    expect(screen.getByText('First Item')).toBeInTheDocument();
    expect(screen.getByText('Second Item')).toBeInTheDocument();
  });
});

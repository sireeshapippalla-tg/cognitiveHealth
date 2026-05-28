import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import SplitSection from './SplitSection';

describe('SplitSection Component', () => {
  it('renders title and children correctly', () => {
    render(
      <SplitSection 
        title="Split Title" 
        image="test.webp"
      />
    );
    expect(screen.getByText('Split Title')).toBeInTheDocument();
  });
});

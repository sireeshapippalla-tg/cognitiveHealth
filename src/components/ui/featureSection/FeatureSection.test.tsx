import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import FeatureSection from './FeatureSection';

describe('FeatureSection Component', () => {
  it('renders title and features correctly', () => {
    const features = [
      { title: 'Feature 1', description: 'Desc 1', icon: <span /> },
      { title: 'Feature 2', description: 'Desc 2', icon: <span /> }
    ];
    
    render(
      <FeatureSection 
        title="Main Title" 
        items={features} 
      />
    );
    
    expect(screen.getByText('Main Title')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Desc 2')).toBeInTheDocument();
  });
});

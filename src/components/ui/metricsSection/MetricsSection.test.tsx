import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import MetricsSection from './MetricsSection';

describe('MetricsSection Component', () => {
  it('renders title and metrics correctly', () => {
    const metrics = [
      { value: '100%', title: 'Uptime', description: 'Description' }
    ];
    
    render(
      <MetricsSection 
        title="Performance" 
        stats={metrics} 
      />
    );
    
    expect(screen.getByText('Performance')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Uptime')).toBeInTheDocument();
  });
});

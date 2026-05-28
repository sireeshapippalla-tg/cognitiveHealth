import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import StatCard from './StatCard';

describe('StatCard Component', () => {
  it('renders the stat and label correctly', () => {
    render(<StatCard value="99%" title="Accuracy Rate" description="Tested across nodes" />);
    expect(screen.getByText('99%')).toBeInTheDocument();
    expect(screen.getByText('Accuracy Rate')).toBeInTheDocument();
  });
});

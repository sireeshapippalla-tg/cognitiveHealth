import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle Component', () => {
  it('renders the title correctly', () => {
    render(<SectionTitle title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the subtitle if provided', () => {
    render(<SectionTitle title="Main Title" subtitle="Sub Title" />);
    expect(screen.getByText('Sub Title')).toBeInTheDocument();
  });
});

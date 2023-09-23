import { render, screen, fireEvent } from '@testing-library/react';
import { LiskovSubstitutionPrinciple } from '../LiskovSubstitutionPrinciple';


describe('<InterfaceSegregationPrinciple />', () => {
  it('should toggle the isOpen state when PinkButton is clicked', () => {
    
    render(<LiskovSubstitutionPrinciple />);

    
    const pinkButton = screen.getByText('Hide');

    
    fireEvent.click(pinkButton);

    
    expect(screen.getByText('Show')).toBeInTheDocument();

    
    fireEvent.click(screen.getByText('Show'));
    expect(screen.getByText('Hide')).toBeInTheDocument();
  });
});

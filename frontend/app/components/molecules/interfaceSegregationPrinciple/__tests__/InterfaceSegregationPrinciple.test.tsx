import { render, screen, fireEvent } from '@testing-library/react';
import { InterfaceSegregationPrinciple } from '../InterfaceSegregationPrinciple';


describe('<InterfaceSegregationPrinciple />', () => {
  it('should toggle the isOpen state when PinkButton is clicked', () => {
    
    render(<InterfaceSegregationPrinciple />);

    
    const pinkButton = screen.getByText('Hide');

    
    fireEvent.click(pinkButton);

    
    expect(screen.getByText('Show')).toBeInTheDocument();

    
    fireEvent.click(screen.getByText('Show'));
    expect(screen.getByText('Hide')).toBeInTheDocument();
  });
});

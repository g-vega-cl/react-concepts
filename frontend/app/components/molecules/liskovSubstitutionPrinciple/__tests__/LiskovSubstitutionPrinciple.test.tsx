import { render, screen, fireEvent } from '@testing-library/react';
import { LiskovSubstitutionPrinciple } from '../LiskovSubstitutionPrinciple';


describe('<InterfaceSegregationPrinciple />', () => {
  it('should toggle the isOpen state when PinkButton is clicked', () => {
    // 1. Render the component
    render(<LiskovSubstitutionPrinciple />);

    // 2. Find the PinkButton element by its content
    const pinkButton = screen.getByText('Hide'); // Initially, it should show "Hide" since isOpen is true

    // 3. Simulate a click event on the button
    fireEvent.click(pinkButton);

    // 4. Check if the content of the PinkButton has been updated
    expect(screen.getByText('Show')).toBeInTheDocument(); // After one click, it should show "Show" since isOpen becomes false

    // Simulate another click to toggle it back
    fireEvent.click(screen.getByText('Show'));
    expect(screen.getByText('Hide')).toBeInTheDocument(); // It should show "Hide" again
  });
});

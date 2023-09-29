import { render, screen } from '@testing-library/react';

import Input from '.';

import StyledProvider from '../../lib/theme';

describe('<Input />', () => {
  const mockValue = '';
  const mockOnChange = jest.fn();
  it('should render the input', () => {
    const { container } = render(
      <StyledProvider>
        <Input
          type="text"
          placeholder="text"
          value={mockValue}
          onChange={mockOnChange}
        />
      </StyledProvider>
    );

    expect(screen.getByTestId('input-component')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

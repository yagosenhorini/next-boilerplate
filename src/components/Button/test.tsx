import { render, screen } from '@testing-library/react';

import Button from '.';
import StyledProvider from '../../lib/theme';

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = render(
      <StyledProvider>
        <Button />
      </StyledProvider>
    );

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

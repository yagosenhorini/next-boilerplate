import { render, screen } from '@testing-library/react';

import Responsive from '.';

import StyledProvider from '../../lib/theme';

describe('<Responsive />', () => {
  xit('should render the component', () => {
    const { container } = render(
      <StyledProvider>
        <Responsive />
      </StyledProvider>
    );

    expect(screen.getByTestId('component-testid')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

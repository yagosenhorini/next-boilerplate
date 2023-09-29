import { render, screen } from '@testing-library/react';

import HeaderMenu from '.';

import StyledProvider from '../../lib/theme';

describe('<HeaderMenu />', () => {
  it('should render the component', () => {
    const { container } = render(
      <StyledProvider>
        <HeaderMenu />
      </StyledProvider>
    );

    expect(screen.getByTestId('header-menu')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

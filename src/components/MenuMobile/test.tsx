import { render, screen } from '@testing-library/react';

import MenuMobile from '.';

import StyledProvider from '../../lib/theme';

describe('<MenuMobile />', () => {
  it('should render the component', () => {
    const { container } = render(
      <StyledProvider>
        <MenuMobile isActive={true} setIsActive={jest.fn()}>
          <p>oi</p>
        </MenuMobile>
      </StyledProvider>
    );

    expect(screen.getByTestId('menu-list-mobile')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

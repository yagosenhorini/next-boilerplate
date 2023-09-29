import { render, screen } from '@testing-library/react';

import StyledProvider from '../../lib/theme';

import Form from '.';

describe('<Form />', () => {
  const mock = jest.fn();
  it('should render the component', () => {
    const { container } = render(
      <StyledProvider>
        <Form handleSubmit={mock}>
          <input type="text" />
        </Form>
      </StyledProvider>
    );

    expect(screen.getByTestId('form')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

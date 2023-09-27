import styled from 'styled-components';

export const Button = styled.button<{
  $backgroundColor?: string;
  $isPrimary?: boolean;
}>`
  width: 100px;
  height: 50px;
  border: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, $backgroundColor }) =>
    !$backgroundColor ? theme.colors.orange : $backgroundColor};
  border-radius: ${({ $isPrimary }) => ($isPrimary ? '20px' : 'unset')};
`;

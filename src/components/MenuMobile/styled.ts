import styled from 'styled-components';
import { rem } from 'polished';

export const MenuWrapper = styled.div<{ $isActive?: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  transition: transform ease-in-out 0.7s;
  transform: ${({ $isActive }) =>
    $isActive ? 'translateX(0%)' : 'translateX(-1000%)'};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  height: ${rem(300)};
  flex-direction: column;

  justify-content: space-between;

  a {
    text-decoration: none;
  }

  li {
    font-size: ${rem(24)};
    margin-left: ${rem(30)};
  }
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  width: ${rem(40)};
  height: ${rem(40)};
  font-size: ${rem(16)};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.main};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.black};
`;

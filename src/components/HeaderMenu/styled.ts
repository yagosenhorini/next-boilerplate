import styled from 'styled-components';

import { rem } from 'polished';

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  width: ${rem(40)};
  height: ${rem(40)};
  margin-top: ${rem(15)};
  margin-left: ${rem(20)};
`;

export const HeaderMenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  width: ${rem(360)};
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: none;
  }
`;

export const HeaderMenuItem = styled.li`
  cursor: pointer;
  width: ${rem(60)};
  color: ${({ theme }) => theme.colors.white};

  /** */
  ${({ theme }) => theme.mq.greaterThan('sm')`
    color: ${theme.colors.black}
  `}

  /** */
  &.is--home {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Image = styled.img``;

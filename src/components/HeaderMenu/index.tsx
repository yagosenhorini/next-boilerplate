'use client';

import Link from 'next/link';
import cx from 'classnames';

import { headerMenu } from '@Resources/header-menu';

import * as S from './styled';

export default function HeaderMenu() {
  return (
    <>
      <S.Menu data-testid="header-menu">
        <S.LogoWrapper>
          <S.Image
            width={40}
            height={40}
            src="/img/images/logo-teste.png"
            alt="Logo"
            title="Logo"
          />
        </S.LogoWrapper>
        <S.HeaderMenuWrapper>
          {headerMenu.map(({ route, title, main }) => (
            <Link key={route} href={route}>
              <S.HeaderMenuItem id={route} className={cx({ 'is--home': main })}>
                {title}
              </S.HeaderMenuItem>
            </Link>
          ))}
        </S.HeaderMenuWrapper>
      </S.Menu>
    </>
  );
}

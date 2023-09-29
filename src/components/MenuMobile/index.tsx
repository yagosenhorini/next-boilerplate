import * as S from './styled';

import { IMenuMobile } from './types';

const MenuMobile = ({ isActive, setIsActive, children }: IMenuMobile) => (
  <S.MenuWrapper data-testid="menu-list-mobile" $isActive={isActive}>
    <S.MenuList>
      <S.CloseButton type="button" onClick={setIsActive}>
        X
      </S.CloseButton>
      {children}
    </S.MenuList>
  </S.MenuWrapper>
);
export default MenuMobile;

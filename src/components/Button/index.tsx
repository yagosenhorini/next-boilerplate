'use client';

import * as S from './styled';
import { IButton } from './types';

const Button = ({ $backgroundColor, $isPrimary }: IButton) => (
  <S.Button $isPrimary={$isPrimary} $backgroundColor={$backgroundColor}>
    Button
  </S.Button>
);

export default Button;

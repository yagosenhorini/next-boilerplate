import * as S from './styled';
import { IButton } from './types';

const Button = ({ backgroundColor }: IButton) => (
  <S.Wrapper>
    <button style={{ backgroundColor: backgroundColor }}>Button</button>
  </S.Wrapper>
);

export default Button;

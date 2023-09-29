import * as S from './styled';
import { IInput } from './types';

const Input = ({ value, onChange, type, placeholder }: IInput) => (
  <S.Input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    data-testid="input-component"
  />
);

export default Input;

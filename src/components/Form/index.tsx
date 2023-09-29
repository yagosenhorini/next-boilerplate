import * as S from './styled';

import { IForm } from './types';

const Form = ({ children, handleSubmit }: IForm) => (
  <S.Form data-testid="form" noValidate onSubmit={handleSubmit}>
    {children}
  </S.Form>
);

export default Form;

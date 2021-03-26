import * as S from './styles';
import { InputLabel } from '../../atoms/Text';

type InputProps = {
  label: string;
  placeholder: string;
};

function Input({ label, placeholder }: InputProps) {
  <S.Wrapper>
    <InputLabel>{label}</InputLabel>
    <S.InputText placeholder={placeholder} placeholderTextColor="white" />
  </S.Wrapper>;
}

export default Input;

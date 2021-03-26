import * as S from './styles';
import { ButtonText } from '../Text';

type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  <S.Wrapper>
    <ButtonText>{text}</ButtonText>
  </S.Wrapper>;
}

export default Button;

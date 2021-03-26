import React from 'react';

import * as S from './styles';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';

type HouseCardProps = {
  imgUri: string;
};

function HouseCard({ imgUri }: HouseCardProps) {
  return (
    <S.Wrapper>
      <S.Image source={{ uri: imgUri }} />
      <S.TextContainer>
        <S.Description>
          <CardTitle>Casa à venda</CardTitle>
          <CardDescription>
            Rua Casemiro de Abreu, 1908 - Casa E, Rio de Janeiro
          </CardDescription>
        </S.Description>

        <CardHightLightText>U$ 200,00</CardHightLightText>
      </S.TextContainer>
    </S.Wrapper>
  );
}

export default HouseCard;

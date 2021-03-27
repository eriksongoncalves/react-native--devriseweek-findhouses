import React from 'react';

import * as S from './styles';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';

type HouseCardProps = {
  title: string;
  description: string;
  imgUri: string;
  price: number;
};

function HouseCard({ title, description, imgUri, price }: HouseCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <S.Wrapper>
      <S.Image source={{ uri: imgUri }} />
      <S.TextContainer>
        <S.Description>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </S.Description>

        <CardHightLightText>{formattedPrice.format(price)}</CardHightLightText>
      </S.TextContainer>
    </S.Wrapper>
  );
}

export default HouseCard;

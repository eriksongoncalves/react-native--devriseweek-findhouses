import React from 'react';

import * as S from './styles';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';
import { formattedPrice } from '../../../utils/formattedPrice';

type HouseCardProps = {
  title: string;
  description: string;
  imgUri: string;
  price: number;
  onPress: () => void;
};

function HouseCard({
  title,
  description,
  imgUri,
  price,
  onPress
}: HouseCardProps) {
  return (
    <S.Wrapper onPress={onPress}>
      <S.Image source={{ uri: imgUri }} />
      <S.TextContainer>
        <S.Description>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </S.Description>

        <CardHightLightText>{formattedPrice(price)}</CardHightLightText>
      </S.TextContainer>
    </S.Wrapper>
  );
}

export default HouseCard;

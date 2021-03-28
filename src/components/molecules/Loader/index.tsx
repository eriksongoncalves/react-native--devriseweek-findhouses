import React from 'react';

import { DetailText } from '../../index';

import * as S from './styles';

type LoaderProps = {
  text?: string;
};

export const Loader = ({ text }: LoaderProps): JSX.Element => {
  return (
    <S.Wrapper>
      <S.LoaderIndicator size="large" color="white" />
      <DetailText>{text || 'Carregando...'}</DetailText>
    </S.Wrapper>
  );
};

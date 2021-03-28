import React from 'react';

import { DetailText } from '../../index';

import * as S from './styles';

type LoaderProps = {
  text?: string;
};

function Loader({ text = '' }: LoaderProps) {
  return (
    <S.Wrapper>
      <S.LoaderIndicator size="large" color="white" />
      <DetailText>{text || 'Carregando...'}</DetailText>
    </S.Wrapper>
  );
}

export default Loader;

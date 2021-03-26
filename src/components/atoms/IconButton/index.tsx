import React, { ReactNode } from 'react';

import * as S from './styles';

type IconButtonProps = {
  transparent?: boolean;
  children: ReactNode;
};

function IconButton({ transparent = false, children }: IconButtonProps) {
  return <S.Wrapper transparent={transparent}>{children}</S.Wrapper>;
}

export default IconButton;

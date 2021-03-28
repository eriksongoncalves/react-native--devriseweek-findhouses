import React, { ReactNode } from 'react';
import { ThemeColors } from '../../../@types/global';

import * as S from './styles';

type IconButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  background?: ThemeColors;
  size?: number;
};

function IconButton({
  children,
  onPress,
  background = 'backgroundLight',
  size = 48
}: IconButtonProps) {
  return (
    <S.Wrapper onPress={onPress} background={background} size={size}>
      {children}
    </S.Wrapper>
  );
}

export default IconButton;

import styled, { css, DefaultTheme } from 'styled-components/native';
import { ThemeColors } from '../../../@types/global';

type WrapperProps = {
  size: number;
  background: ThemeColors;
};

const wrapperModifier = {
  background: (theme: DefaultTheme, bgColor: ThemeColors) => css`
    background-color: ${theme.colors[bgColor]};
  `
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  ${({ theme, size = 48, background }) => css`
    width: ${theme.metrics.px(size)}px;
    height: ${theme.metrics.px(size)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(6)}px;

    ${background && wrapperModifier.background(theme, background)}
  `}
`;

import styled, { css, DefaultTheme } from 'styled-components/native';

type WrapperProps = {
  transparent?: boolean;
};

const wrapperModifier = {
  transparent: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.backgroundLight};
  `
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  ${({ theme, transparent }) => css`
    display: flex;
    width: ${theme.metrics.px(48)}px;
    height: ${theme.metrics.px(48)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(6)}px;
    background: ${theme.colors.purpleTransparent};

    ${transparent && wrapperModifier.transparent(theme)}
  `}
`;

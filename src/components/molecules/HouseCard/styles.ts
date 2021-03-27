import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    border-radius: ${theme.metrics.px(24)}px;
    background-color: ${theme.colors.backgroundLight};
    margin-top: ${theme.metrics.px(24)}px;
    overflow: hidden;
  `}
`;

export const Image = styled.Image`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(200)}px;
  `}
`;

export const TextContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.metrics.px(12)}px;
  `}
`;

export const Description = styled.View`
  ${({ theme }) => css`
    flex: 1;
    margin-right: ${theme.metrics.px(20)}px;
  `}
`;

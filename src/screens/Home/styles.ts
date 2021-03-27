import styled, { css } from 'styled-components/native';

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
    padding-top: ${theme.metrics.px(50)}px;
  `}
`;

export const TopContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: ${theme.metrics.px(48)}px;
  `}
`;

export const TitleContainer = styled.View`
  width: 70%;
`;

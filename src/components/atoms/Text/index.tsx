import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(28)}px;
    color: ${theme.colors.white};
    font-weight: bold;
    font-family: ${theme.font.family.bold};
  `}
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: ${theme.colors.white};
    font-weight: 600;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(22)}px;
    font-weight: 600;
  `}
`;

export const DetailTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(24)}px;
    color: ${theme.colors.white};
    font-weight: bold;
  `}
`;

export const DetailSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.white};
  `}
`;

export const DetailText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: ${theme.colors.white};
  `}
`;

export const DetailSectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(20)}px;
    color: ${theme.colors.white};
    font-weight: bold;
  `}
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: ${theme.colors.white};
    font-weight: bold;
  `}
`;

export const CardDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(10)}px;
    color: ${theme.colors.white};
  `}
`;

export const CardHightLightText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.white};
    font-weight: 600;
  `}
`;

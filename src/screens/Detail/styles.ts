import styled, { css } from 'styled-components/native';
import { IconButton } from '../../components';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundDark};
  `}
`;

export const LoaddingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageBackground = styled.ImageBackground`
  ${({ theme }) => css`
    flex-direction: row;
    height: 40%;
    justify-content: space-between;
    padding-top: ${theme.metrics.px(68)}px;
    padding-horizontal: ${theme.metrics.px(24)}px;
  `}
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 48
  }
})`
  ${({ theme }) => css`
    padding: ${theme.metrics.px(24)}px;
    width: 100%;
    height: 65%;
    background-color: ${theme.colors.backgroundDark};
    border-top-right-radius: ${theme.metrics.px(24)}px;
    border-top-left-radius: ${theme.metrics.px(24)}px;
    position: absolute;
    bottom: 0;
  `}
`;

export const FeaturesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const HouseFeatureCard = styled(IconButton)`
  justify-content: center;
`;

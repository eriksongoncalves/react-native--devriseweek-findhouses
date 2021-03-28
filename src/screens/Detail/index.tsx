import React, { useEffect, useState } from 'react';
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome
} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { getHouseDetail } from '../../services/calls';

import * as S from './styles';
import {
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  IconButton,
  Loader
} from '../../components';
import { Property } from '../../@types/global';
import { formattedPrice } from '../../utils/formattedPrice';

type DetailScreenRouteParams = {
  propertyId: string;
};

function DetailScreen() {
  const { goBack } = useNavigation();
  const route = useRoute();
  const params = route.params as DetailScreenRouteParams;

  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState<Property>();

  useEffect(() => {
    getHouseDetail(params.propertyId).then(response => {
      setHouseDetail(response);
      setLoading(false);
    });
  }, [params.propertyId]);

  return (
    <S.Wrapper>
      {loading ? (
        <S.LoaddingWrapper>
          <Loader />
        </S.LoaddingWrapper>
      ) : (
        <>
          <S.ImageBackground source={{ uri: houseDetail!.photos[0].href }}>
            <IconButton onPress={goBack} background="purpleTransparent">
              <AntDesign name="left" size={20} color="#fff" />
            </IconButton>
            <IconButton onPress={goBack} background="purpleTransparent">
              <MaterialIcons name="star-border" size={28} color="#fff" />
            </IconButton>
          </S.ImageBackground>
          <S.BottomScreenContainer>
            <DetailTitle>{houseDetail!.address.line}</DetailTitle>
            <DetailSubTitle>
              {formattedPrice(houseDetail!.community.price_max)}
            </DetailSubTitle>
            <DetailText>{`${houseDetail!.address.neighborhood_name}-${
              houseDetail!.address.state
            }`}</DetailText>

            <DetailSectionTitle mt={24} mb={12}>
              Detalhes
            </DetailSectionTitle>

            <S.FeaturesContainer>
              <S.HouseFeatureCard size={80}>
                <SimpleLineIcons
                  name="size-fullscreen"
                  size={20}
                  color="#fff"
                />
                <DetailText mt={10}>{`${houseDetail!.lot_size.size} ${
                  houseDetail!.lot_size.units
                }`}</DetailText>
              </S.HouseFeatureCard>
              <S.HouseFeatureCard size={80}>
                <MaterialCommunityIcons
                  name="bed-king-outline"
                  size={26}
                  color="#fff"
                />
                <DetailText mt={10}>{`${houseDetail!.community.beds_min}-${
                  houseDetail!.community.beds_max
                } beds`}</DetailText>
              </S.HouseFeatureCard>
              <S.HouseFeatureCard size={80}>
                <FontAwesome name="bath" size={20} color="#fff" />
                <DetailText mt={10}>{`${houseDetail!.community.baths_min}-${
                  houseDetail!.community.baths_max
                } baths`}</DetailText>
              </S.HouseFeatureCard>
            </S.FeaturesContainer>

            <DetailSectionTitle mt={24} mb={12}>
              Vantagens do Imóvel
            </DetailSectionTitle>
            {houseDetail!.features &&
              houseDetail!.features[1].text.map(item => (
                <DetailText key={item} mb={2}>{`-${item}`}</DetailText>
              ))}
          </S.BottomScreenContainer>
        </>
      )}
    </S.Wrapper>
  );
}

export default DetailScreen;

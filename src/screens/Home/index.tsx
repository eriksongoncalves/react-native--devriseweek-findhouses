import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

import * as S from './styles';
import { Title, Input, IconButton, HousesList } from '../../components';
import { getHousesCall } from '../../services/calls';
import { Property } from '../../@types/global';

function HomeScreen() {
  const [houses, setHouses] = useState<Property[]>([]);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    setHouses(result);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#1e1d42' }}>
      <S.ScreenContainer>
        <HousesList data={houses}>
          <>
            <S.TopContainer>
              <S.TitleContainer>
                <Title>Encontre aqui seu imóvel</Title>
              </S.TitleContainer>
              <IconButton>
                <Ionicons name="filter" size={20} color="#fff" />
              </IconButton>
            </S.TopContainer>

            <Input label="Localização" placeholder="Digite o endereço" />
          </>
        </HousesList>
      </S.ScreenContainer>
    </SafeAreaView>
  );
}

export default HomeScreen;

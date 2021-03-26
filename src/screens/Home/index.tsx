import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

import * as S from './styles';
import { Title, Input, IconButton } from '../../components';

function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: '#1e1d42' }}>
      <S.ScreenContainer>
        <S.TopContainer>
          <S.TitleContainer>
            <Title>Encontre aqui seu imóvel</Title>
          </S.TitleContainer>
          <IconButton>
            <Ionicons name="filter" size={20} color="#fff" />
          </IconButton>
        </S.TopContainer>

        <Input label="Localização" placeholder="Digite o endereço" />
      </S.ScreenContainer>
    </SafeAreaView>
  );
}

export default HomeScreen;

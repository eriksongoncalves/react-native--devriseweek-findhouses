import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

import * as S from './styles';
import { Title, Input, IconButton, HouseCard } from '../../components';

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

        <HouseCard imgUri="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      </S.ScreenContainer>
    </SafeAreaView>
  );
}

export default HomeScreen;

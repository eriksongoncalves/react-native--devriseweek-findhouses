import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Property } from '../../../@types/global';

export const List = styled(FlatList as new () => FlatList<Property>).attrs({
  showsVerticalScrollIndicator: false
})``;

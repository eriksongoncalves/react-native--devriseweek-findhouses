import React from 'react';

import * as S from './styles';
import { HouseCard } from '../../molecules';
import { Property } from '../../../@types/global';

type HousesListProps = {
  data: Property[];
  children?: JSX.Element;
};

function HousesList({ data, children }: HousesListProps) {
  return (
    <S.List
      data={data}
      keyExtractor={item => item.property_id}
      renderItem={({ item }) => (
        <HouseCard
          title={item.address.line}
          description={`${item.address.neighborhood_name} - ${item.address.state}`}
          imgUri={item.photos[0].href}
          price={item.community.price_max}
        />
      )}
      ListHeaderComponent={children}
    />
  );
}

export default HousesList;

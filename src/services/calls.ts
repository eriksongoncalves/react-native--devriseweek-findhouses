import api from './api';
import { Property } from '../@types/global';

type GetHousesCall = {
  properties: Property[];
};

export const getHousesCall = async () => {
  const result = await api.get<GetHousesCall>('properties/v2/list-for-rent', {
    params: {
      city: 'Miami',
      state_code: 'FL',
      limit: 15,
      offset: 0,
      sort: 'relevance'
    }
  });

  return result.data.properties;
};

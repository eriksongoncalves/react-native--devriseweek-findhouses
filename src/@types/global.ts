import theme from '../styles/theme';

export type ThemeColors = keyof typeof theme.colors;

type Address = {
  line: string;
  state: string;
  neighborhood_name: string;
};

type Photo = {
  href: string;
};

type Community = {
  baths_max: number;
  baths_min: number;
  beds_max: number;
  beds_min: number;
  price_max: number;
};

type Features = {
  text: string[];
};

export type Property = {
  property_id: string;
  address: Address;
  photos: Photo[];
  community: Community;
  lot_size: {
    size: number;
    units: string;
  };
  features?: Features[];
};

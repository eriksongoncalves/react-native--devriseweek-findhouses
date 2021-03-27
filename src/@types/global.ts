type Address = {
  line: string;
  state: string;
  neighborhood_name: string;
};

type Photo = {
  href: string;
};

type Community = {
  price_max: number;
};

export type Property = {
  property_id: string;
  address: Address;
  photos: Photo[];
  community: Community;
};

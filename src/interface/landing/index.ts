export interface CarCardType {
  id: string;
  name: string;
  category: string;
  transmission: string;
  capacity: number;
  storage: number;
  price: string;
  url: string;
}

export type FormPenyewaValue = {
  date_rent: string;
  day_rent: string;
  name: string;
  contact: string;
  address: string;
};

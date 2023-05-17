export interface Product {
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
  category: string;
  description: string;

}

export interface Rating {
  rate: number,
  count: number
}

export interface Image{
  path:string;
}

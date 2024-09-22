export interface Wine {
  id: number;
  name: string;
  appellation: string;
  domain: string;
  region: string;
  year: number;
  color: WineColorEnum;
  price: number;
  biologic: boolean;
  bestAfter: number;
  bestBefore: number;
  quantity: number;
}

export enum WineColorEnum {
  red = "red",
  white = "white",
  pink = "pink",
  sparkling = "sparkling",
}

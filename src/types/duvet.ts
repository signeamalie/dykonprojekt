//matcher vores dyne typer i databasen
export type Warmth = "sval" | "varm" | "ekstra varm";

//matcher vores dyne interface i databasen
export interface Duvet {
    id: number;
    name: string;
    brand: string;
    price: number;
    fill: string;
    warmth: Warmth;
    hypoallergenic: boolean;
    images: string[];
  }
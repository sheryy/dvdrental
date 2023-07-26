import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type MpaaRating = "G" | "NC-17" | "PG" | "PG-13" | "R";

export type Numeric = ColumnType<string, string | number, string | number>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Actor {
  actorId: Generated<number>;
  firstName: string;
  lastName: string;
  lastUpdate: Generated<Timestamp>;
}

export interface ActorInfo {
  actorId: number | null;
  firstName: string | null;
  lastName: string | null;
  filmInfo: string | null;
}

export interface Address {
  addressId: Generated<number>;
  address: string;
  address2: string | null;
  district: string;
  cityId: number;
  postalCode: string | null;
  phone: string;
  lastUpdate: Generated<Timestamp>;
}

export interface Category {
  categoryId: Generated<number>;
  name: string;
  lastUpdate: Generated<Timestamp>;
}

export interface City {
  cityId: Generated<number>;
  city: string;
  countryId: number;
  lastUpdate: Generated<Timestamp>;
}

export interface Country {
  countryId: Generated<number>;
  country: string;
  lastUpdate: Generated<Timestamp>;
}

export interface Customer {
  customerId: Generated<number>;
  storeId: number;
  firstName: string;
  lastName: string;
  email: string | null;
  addressId: number;
  activebool: Generated<boolean>;
  createDate: Generated<Timestamp>;
  lastUpdate: Generated<Timestamp | null>;
  active: number | null;
}

export interface CustomerList {
  id: number | null;
  name: string | null;
  address: string | null;
  zipCode: string | null;
  phone: string | null;
  city: string | null;
  country: string | null;
  notes: string | null;
  sid: number | null;
}

export interface Film {
  filmId: Generated<number>;
  title: string;
  description: string | null;
  releaseYear: string | null;
  languageId: number;
  rentalDuration: Generated<number>;
  rentalRate: Generated<Numeric>;
  length: number | null;
  replacementCost: Generated<Numeric>;
  rating: Generated<MpaaRating | null>;
  lastUpdate: Generated<Timestamp>;
  specialFeatures: string[] | null;
  fulltext: string;
}

export interface FilmActor {
  actorId: number;
  filmId: number;
  lastUpdate: Generated<Timestamp>;
}

export interface FilmCategory {
  filmId: number;
  categoryId: number;
  lastUpdate: Generated<Timestamp>;
}

export interface FilmList {
  fid: number | null;
  title: string | null;
  description: string | null;
  category: string | null;
  price: Numeric | null;
  length: number | null;
  rating: MpaaRating | null;
  actors: string | null;
}

export interface Inventory {
  inventoryId: Generated<number>;
  filmId: number;
  storeId: number;
  lastUpdate: Generated<Timestamp>;
}

export interface Language {
  languageId: Generated<number>;
  name: string;
  lastUpdate: Generated<Timestamp>;
}

export interface NicerButSlowerFilmList {
  fid: number | null;
  title: string | null;
  description: string | null;
  category: string | null;
  price: Numeric | null;
  length: number | null;
  rating: MpaaRating | null;
  actors: string | null;
}

export interface Payment {
  paymentId: Generated<number>;
  customerId: number;
  staffId: number;
  rentalId: number;
  amount: Numeric;
  paymentDate: Timestamp;
}

export interface Rental {
  rentalId: Generated<number>;
  rentalDate: Timestamp;
  inventoryId: number;
  customerId: number;
  returnDate: Timestamp | null;
  staffId: number;
  lastUpdate: Generated<Timestamp>;
}

export interface SalesByFilmCategory {
  category: string | null;
  totalSales: Numeric | null;
}

export interface SalesByStore {
  store: string | null;
  manager: string | null;
  totalSales: Numeric | null;
}

export interface Staff {
  staffId: Generated<number>;
  firstName: string;
  lastName: string;
  addressId: number;
  email: string | null;
  storeId: number;
  active: Generated<boolean>;
  username: string;
  password: string | null;
  lastUpdate: Generated<Timestamp>;
  picture: Buffer | null;
}

export interface StaffList {
  id: number | null;
  name: string | null;
  address: string | null;
  zipCode: string | null;
  phone: string | null;
  city: string | null;
  country: string | null;
  sid: number | null;
}

export interface Store {
  storeId: Generated<number>;
  managerStaffId: number;
  addressId: number;
  lastUpdate: Generated<Timestamp>;
}

export interface DB {
  actor: Actor;
  actorInfo: ActorInfo;
  address: Address;
  category: Category;
  city: City;
  country: Country;
  customer: Customer;
  customerList: CustomerList;
  film: Film;
  filmActor: FilmActor;
  filmCategory: FilmCategory;
  filmList: FilmList;
  inventory: Inventory;
  language: Language;
  nicerButSlowerFilmList: NicerButSlowerFilmList;
  payment: Payment;
  rental: Rental;
  salesByFilmCategory: SalesByFilmCategory;
  salesByStore: SalesByStore;
  staff: Staff;
  staffList: StaffList;
  store: Store;
}

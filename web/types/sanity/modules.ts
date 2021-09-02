import { KeyedObject } from "@sanity/types";
import { TColor, TFigure, TBrand, TThirdPartyLink } from "../";

export interface ITextSection extends KeyedObject {
  _type?: "textSection";
  backgroundColor: TColor;
  heading: string;
  portableSimple: Array<any>;
}
export interface ICarouselModule extends KeyedObject {
  _type?: "photoCarousel";
  images: Array<TFigure>;
}
export interface IBrandsModule extends KeyedObject {
  _type?: "brandsSection";
  backgroundColor: TColor;
  heading: string;
  brands: Array<TBrand>;
}
export interface ILinksModule extends KeyedObject {
  _type?: "linksSection";
  backgroundColor: TColor;
  heading: string;
  portableSimple?: Array<any>;
  links: Array<TThirdPartyLink>;
}
export interface IContactModule extends KeyedObject {
  _type?: "contactSection";
  backgroundColor: TColor;
  heading: string;
  email: string;
}

export type TModule = ITextSection | ICarouselModule | IBrandsModule | ILinksModule | IContactModule;
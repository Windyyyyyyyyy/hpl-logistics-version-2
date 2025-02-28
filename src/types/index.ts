import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface CardInfo {
  label: string;
  number: string;
}

export interface IntroduceProps {
  content: string;
  button: string;
}

export interface LocationProps {
  city: string;
  addressLabel: string;
  address: string;
  phoneNumberLabel: string;
  phoneNumber: string;
  emailLabel: string;
  email: string;
}

export interface CardServicesProps {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  title: string;
  desc: string;
  button: string;
}

export interface Route {
  label: string;
  stringUrl: string;
  active: boolean;
}

export interface Banner {
  title: string;
  routes: Array<Route>;
}

export interface NewsCardProps {
  date: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  description: string;
}

export interface NewsCarouselProps {
  title: string;
  posts: Array<NewsCardProps>;
}

export interface QuotationProps {
  thValue: Array<string>;
}

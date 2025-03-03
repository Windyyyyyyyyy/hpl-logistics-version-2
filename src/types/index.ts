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
  imageUrl: string;
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

export interface StrengthsProps {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  label: string;
  desc: string;
}

export interface ServicesProps {
  imageUrl: string;
  label: string;
}

export interface ServicesCarouselProps {
  services: Array<ServicesProps>;
  button: string;
}

export interface ServicesComponentProps {
  title: string;
  desc: string;
  image: string;
  whyChooseLabel: string;
  whyChoose: Array<{ h4: string; span: string }>;
  servicesLabel: string;
  services: Array<string>;
}

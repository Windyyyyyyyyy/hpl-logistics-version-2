import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface CardInfo {
  label: string;
  number: string;
}

export interface CardServices {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  title: string;
  desc: string;
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

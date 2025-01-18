export interface CardInfo {
  label: string;
  number: string;
}

export interface CardServices {
  icon: string;
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

export interface Route {
  title: string;
  path: string;
  icon: JSX.Element;
  component: () => JSX.Element;
}
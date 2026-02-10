import type { JSX } from "react";

type Props = {
  children: JSX.Element;
};

const PublicRoute = ({ children }: Props) => {
  return children;
};

export default PublicRoute;

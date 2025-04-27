import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const styles: object = {
  display: "flex",
};
const Main = ({ children }: MainProps) => {
  return <div style={styles}>{children}</div>;
};

export default Main;

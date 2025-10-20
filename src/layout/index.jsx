import { AppMain } from "./componenets/AppMain";
import { LeftMenu } from "./componenets/LeftMenu";

export const Layout = () => {
  return (
    <div className="w-full h-full flex">
      <LeftMenu />
      <AppMain />
    </div>
  );
};

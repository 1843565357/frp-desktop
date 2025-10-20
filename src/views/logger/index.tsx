import { Button } from "@mui/material";
import { Breadcrumb } from "../../layout/componenets/Breadcrumb";

export const Logger = () => {
  return (
    <div className="main">
      <Breadcrumb>
        <span>aaa</span>
      </Breadcrumb>

      <div className="app-container-breadcrumb">
        <div className="p-4 w-full bg-white rounded drop-shadow-lg"></div>
      </div>
    </div>
  );
};

import { Breadcrumb } from "../../layout/componenets/Breadcrumb";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useFrpReleases } from "../../hooks/useFrpReleases";
import { MyCard } from "../../components/MyCard";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export const Download = () => {
  const { platform, arch, frpSuffix } = useContext(GlobalContext);
  console.log(frpSuffix);

  const { releases, loading } = useFrpReleases({ frpSuffix });
  console.log(releases);

  return (
    <div className="main">
      <Breadcrumb>
        <a></a>
      </Breadcrumb>
      <div className="app-container-breadcrumb download">
        {[...Array(20)].map((_, i) => (
          <div
            className="w-[400px] h-24 shadow-lg rounded-lg download-compont"
            key={i + 1}
          >
            <p className="font-sans ...">{i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

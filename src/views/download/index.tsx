import { Breadcrumb } from "../../layout/componenets/Breadcrumb";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useFrpReleases } from "../../hooks/useFrpReleases";
import { MyCard } from "../../components/MyCard";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Button, Grid } from "@mui/material";

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
        {releases.map((release) => (
          <div
            className="w-[400px] h-[150px] shadow-lg rounded-lg download-compont flex"
            key={release.id}
          >
            <div className="w-[300px] ">
              <div>{release.name}</div>
              <div>{release.asset.size}</div>
              <div>下载数:{release.asset.download_count}</div>
              <div>发布时间:{release.publishedAt}</div>
            </div>
            <div className="flex-1 ">
              <Button>下载</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

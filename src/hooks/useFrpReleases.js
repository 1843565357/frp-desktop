// src/hooks/useFrpReleases.js
import { useState, useEffect } from "react";
import { getFrpReleases } from "../api/github";

export const useFrpReleases = (options) => {
  const { frpSuffix } = options;

  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReleases = async () => {
    if (!frpSuffix) return;

    try {
      setLoading(true);
      const data = await getFrpReleases(1, 10);
      console.log(data);

      // 过滤每个 release 的 assets，只保留匹配当前系统的文件
      const filteredReleases = data.map((release) => {
        const matchedAsset = release.assets.find((asset) =>
          asset.name.endsWith(frpSuffix)
        );
        return {
          id: release.id,
          name: release.name,
          createdAt: release.created_at,
          publishedAt: release.published_at,
          asset: matchedAsset || null,
        };
      });
      setReleases(filteredReleases);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (frpSuffix) {
      fetchReleases();
    }
  }, [frpSuffix]);

  return {
    releases,
    loading,
    refetch: fetchReleases, // 可选：手动重新获取
  };
};

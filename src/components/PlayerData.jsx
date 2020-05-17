import React from "react";
import instance from "../axiosDefaults";

const PlayerData = (id) => {
  let [playerData, setData] = React.useState(null);
  console.log(id);
  

  const fetchLiorData = async () => {
    const request = await instance.get(
      `/players/${id.id}/stats/csgo`
    );
    console.log(request.data);

    return request.data;
  };

  React.useEffect(() => {
    fetchLiorData().then((data) => {
      setData(data);
    });
  },[id]);

  return ( playerData == null ? (
    "Loading"
  ) : 
    <div>
      <p>
        Average HS percentage: {playerData.lifetime["Average Headshots %"]}%
      </p>
      <p>Average K/D Ratio: {playerData.lifetime["Average K/D Ratio"]}</p>
      <p>Current Win Streak: {playerData.lifetime["Current Win Streak"]}</p>
    </div>
  );
};

export default PlayerData;
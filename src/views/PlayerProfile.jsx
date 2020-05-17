import React from "react";
import instance from "../axiosDefaults";

const PlayerProfile = (id, nickname) => {
  let [playerData, setData] = React.useState(null);

  const fetchLiorData = async () => {
    const request = await instance.get(
      "/players/cd8a3937-a6b5-4972-8d0b-42c790ff3132/stats/csgo"
    );
    console.log(request.data);
    
    return request.data;
  };

  React.useEffect(() => {
    fetchLiorData().then((data) => {
      setData(data);
    });
  }, []);

  return playerData == null ? (
    "no data"
  ) : (
    <div>
      <h1>Lior</h1>
      <p>Average HS percentage: {playerData.lifetime["Average Headshots %"]}%</p>
      <p>Average K/D Ratio: {playerData.lifetime["Average K/D Ratio"]}</p>
      <p>Current Win Streak: {playerData.lifetime["Current Win Streak"]}</p>
    </div>
  );
};

export default PlayerProfile;

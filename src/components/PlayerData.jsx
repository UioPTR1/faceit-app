import React from "react";
import instance from "../axiosDefaults";

const PlayerData = (id) => {
  let [playerData, setData] = React.useState(null);
  let [secondData, setSecondData] = React.useState(null);
  console.log(id);

  const fetchLiorData = async () => {
    const request = await instance.get(`/players/${id.id}/stats/csgo`);
    console.log(request.data);

    return request.data;
  };

  const fetchPlayerData = async () => {
    const request = await instance.get(`players/${id.id}`);
    console.log(request.data);
    return request.data;
  };

  React.useEffect(() => {
    fetchLiorData().then((data) => {
      setData(data);
    });
    fetchPlayerData().then((data) => {
      setSecondData(data);
    });
  }, [id]);

  return (playerData == null || secondData == null) ? (
    "Loading"
  ) : (
    <div>
      <p>
        Average HS percentage: {playerData.lifetime["Average Headshots %"]}%
      </p>
      <p>Average K/D Ratio: {playerData.lifetime["Average K/D Ratio"]}</p>
      <p>Current Win Streak: {playerData.lifetime["Current Win Streak"]}</p>
      <p>Winrate: {playerData.lifetime["Win Rate %"]}%</p>
      <p>Matches played: {playerData.lifetime.Matches}</p>
      <p>Elo: {secondData.games.csgo.faceit_elo}</p>
      <p>Level: {secondData.games.csgo.skill_level}</p>

    </div>
  );
};

export default PlayerData;

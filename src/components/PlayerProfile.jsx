import * as React from "react";
import instance from "../axiosDefaults";

const PlayerProfile = () => {
  let [playerData, setData] = React.useState(null);

  const fetchLiorData = async () => {
    const request = await instance.get(
      "/players/cd8a3937-a6b5-4972-8d0b-42c790ff3132"
    );
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
      <h1>{playerData.nickname}</h1>
    </div>
  );
};

export default PlayerProfile;
